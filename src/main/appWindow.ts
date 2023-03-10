import { app, BrowserWindow } from 'electron'
import path from 'path'
import { registerTitlebarIpc } from '@misc/window/titlebarIPC'

// Devtools extensions
import installExtension, { REDUX_DEVTOOLS } from 'electron-devtools-installer'

// Electron Forge automatically creates these entry points
declare const APP_WINDOW_WEBPACK_ENTRY: string
declare const APP_WINDOW_PRELOAD_WEBPACK_ENTRY: string

let appWindow: BrowserWindow

/**
 * Create Application Window
 * @returns {BrowserWindow} Application Window Instance
 */
export function createAppWindow(): BrowserWindow {
  // Create new window instance
  appWindow = new BrowserWindow({
    width: 800,
    height: 600,
    show: false,
    autoHideMenuBar: true,
    frame: true, // set false later?
    // titleBarStyle: 'hidden',
    icon: path.resolve('assets/images/appIcon.ico'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      nodeIntegrationInWorker: false,
      nodeIntegrationInSubFrames: false,
      preload: APP_WINDOW_PRELOAD_WEBPACK_ENTRY,
      sandbox: false,
    },
  })

  // TODO: Add check if production?
  // Install devtools
  installExtension(REDUX_DEVTOOLS)
    .then((name: unknown) => console.log(`Added Extension:  ${name}`))
    .catch((err: unknown) => console.log('An error occurred: ', err))

  // Load the index.html of the app window.
  appWindow.loadURL(APP_WINDOW_WEBPACK_ENTRY)

  // Show window when its ready to
  appWindow.on('ready-to-show', () => appWindow.show())

  // Register Inter Process Communication for main process
  registerMainIPC()

  // Close all windows when main window is closed
  appWindow.on('close', () => {
    appWindow = null
    app.quit()
  })

  // Open the dev tools
  appWindow.webContents.openDevTools()

  return appWindow
}

/**
 * Register Inter Process Communication
 * Important for making the connections
 */
function registerMainIPC() {
  /**
   * Here you can assign IPC related codes for the application window
   * to Communicate asynchronously from the main process to renderer processes.
   */
  registerTitlebarIpc(appWindow)
}
