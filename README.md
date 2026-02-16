# ImmichApp 📸

A dedicated, lightweight desktop browser for your personal Immich server. Built with Electron, it provides a native application experience without address bars or browser clutter.

![Setup Page Screenshot](assets/immich-logo.svg) <!-- Replace with real screenshot if possible -->

## Features

- 🚀 **Dedicated Window**: Operates as a standalone app, separate from your main browser.
- 🎨 **Dynamic Setup**: Easy configuration on the first run with an elegant UI.
- 🌓 **Auto-Theme**: Automatically switches between Light and Dark mode based on your Windows settings.
- 🔒 **Domain Lockdown**: Navigation is restricted to your Immich server; external links open in your default system browser.
- 💾 **Session Persistence**: Keeps you logged in even after restarting the app.
- 🖼️ **Native Feel**: Frameless look with no navigation controls (back/forward/refresh) for an immersive experience.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/ImmichApp.git
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
