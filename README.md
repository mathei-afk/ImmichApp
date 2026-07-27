# ImmichApp 📸

<p align="center">
  <a href="https://immich.app" target="_blank">
    <img src="assets/immich-logo.svg" width="650" alt="Immich Logo"/>
  </a>
</p>

<p align="center">
  <strong>A dedicated, lightweight desktop browser for your personal Immich server.</strong>
</p>

---


ImmichApp is a minimal Electron-based desktop wrapper for your personal Immich instance.  
It provides a clean, native app experience without browser clutter like address bars or tabs.

---

## ✨ Features

- 🚀 **Dedicated Window** – Runs as a standalone desktop app.
- 🎨 **Elegant First-Run Setup** – Clean and simple configuration UI.
- 🌓 **Auto Theme Detection** – Automatically switches between Light and Dark mode based on your Windows settings.
- 🔒 **Domain Lockdown** – Navigation is restricted to your Immich server. External links open in your default browser.
- 💾 **Session Persistence** – Stay logged in even after restarting the app.
- 🖼️ **Native Feel** – Frameless window without navigation buttons for an immersive experience.

---

# 🚀 Getting Started

## 🔹 Quick Download (Recommended)

If you **don’t want to install Node.js or run commands in the terminal**, you can simply download the ready-to-use `.exe` file from the Releases page:

👉 **Download here:**  
[Releases](https://github.com/mathei-afk/ImmichApp/releases)

1. Go to the latest release.
2. Download the `.exe` file.
3. Run it — no installation required.

---

## 🔹 Manual Installation (Development Mode)

If you prefer running it manually or contributing to development:

### Prerequisites

- Node.js (v16 or higher)  
  Download from: https://nodejs.org/
- npm (comes with Node.js)

---

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mathei-afk/ImmichApp.git
   cd ImmichApp
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run in development mode:**
   ```bash
   npm start
   ```

### Building the Executable (.exe)

To generate a portable Windows application:

1. **Enable Developer Mode** in Windows Settings (required for symbolic links during build).
2. **Run as Administrator** your terminal and execute:
   ```bash
   npm run build
   ```
3. Find your app in the `dist/` folder.

## Configuration

On the first launch, the app will ask for your **Immich Server URL**. This is saved locally in:
`%AppData%/immich-app/config.json`

## License

This project is open-source and available under the [MIT License](LICENSE).

---
*Created by [mathei-afk](https://github.com/mathei-afk)*
