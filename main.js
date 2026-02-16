const { app, BrowserWindow, shell, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');

let mainWindow;
const CONFIG_PATH = path.join(app.getPath('userData'), 'config.json');

function getSavedConfig() {
    try {
        if (fs.existsSync(CONFIG_PATH)) {
            return JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf8'));
        }
    } catch (e) {
        console.error('Eroare la citirea configurării:', e);
    }
    return null;
}

function saveConfig(config) {
    try {
        fs.writeFileSync(CONFIG_PATH, JSON.stringify(config, null, 2));
    } catch (e) {
        console.error('Eroare la salvarea configurării:', e);
    }
}

function createWindow() {
    const config = getSavedConfig();

    mainWindow = new BrowserWindow({
        width: 1200,
        height: 900,
        title: "ImmichApp",
        icon: path.join(__dirname, 'assets', 'immich.ico'),
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js'),
            partition: 'persist:immich-browser-session'
        },
        autoHideMenuBar: true,
    });

    if (config && config.url) {
        loadMainSite(config.url);
    } else {
        mainWindow.loadFile('setup.html');
    }

    mainWindow.on('closed', function () {
        mainWindow = null;
    });
}

function loadMainSite(url) {
    const parsedUrl = new URL(url);
    const allowedHost = parsedUrl.hostname;

    mainWindow.loadURL(url);

    // Gestionare navigare (Restricționare domenii)
    mainWindow.webContents.on('will-navigate', (event, navUrl) => {
        try {
            const parsedNavUrl = new URL(navUrl);
            if (parsedNavUrl.hostname !== allowedHost && !parsedNavUrl.hostname.endsWith('.' + allowedHost)) {
                event.preventDefault();
                shell.openExternal(navUrl);
            }
        } catch (e) {
            console.error('URL invalid:', navUrl);
        }
    });

    // Prevenire deschidere ferestre noi în afara domeniului
    mainWindow.webContents.setWindowOpenHandler(({ url: popupUrl }) => {
        try {
            const parsedPopupUrl = new URL(popupUrl);
            if (parsedPopupUrl.hostname === allowedHost || parsedPopupUrl.hostname.endsWith('.' + allowedHost)) {
                return { action: 'allow' };
            }
        } catch (e) { }
        shell.openExternal(popupUrl);
        return { action: 'deny' };
    });
}

// IPC Listener pentru salvarea URL-ului din Setup Page
ipcMain.on('save-url', (event, url) => {
    saveConfig({ url });
    loadMainSite(url);
});

app.whenReady().then(() => {
    createWindow();

    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit();
});
