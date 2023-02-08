// Forge Configuration
const path = require('path')
const rootDir = process.cwd()

module.exports = {
  // Packager Config
  packagerConfig: {
    // Create asar archive for main, renderer process files
    asar: true,
    // Set executable name
    executableName: 'rom-manager',
    // Set application copyright
    appCopyright: 'Copyright (C) 2023 Valentin Zwerschke',
    // Set application icon
    icon: path.resolve('assets/images/appIcon.ico'),
  },
  // Forge Makers
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {},
      platforms: ['win32'],
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['linux', 'darwin', 'win32'],
    },
    {
      name: '@electron-forge/maker-dmg',
      config: {
        background: './assets/dmg-background.png',
        format: 'ULFO',
      },
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {
        maintainer: 'Pavel Zwerschke',
        homepage: 'https://github.com/RomManager',
      },
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {
        homepage: 'https://github.com/RomManager',
      },
    },
  ],
  // Forge Plugins
  plugins: [
    {
      name: '@electron-forge/plugin-webpack',
      config: {
        devServer: {
          allowedHosts: 'auto',
        },
        // Fix content-security-policy error when image or video src isn't same origin
        // Remove 'unsafe-eval' to get rid of console warning in development mode.
        devContentSecurityPolicy: `default-src 'self' 'unsafe-inline' data:; script-src 'self' 'unsafe-inline' data:;connect-src 'self' http://localhost:8080 'unsafe-eval';img-src 'self' http://localhost:8080 'unsafe-eval'`,
        // Ports
        port: 3000, // Webpack Dev Server port
        loggerPort: 9000, // Logger port
        // Main process webpack configuration
        mainConfig: path.join(rootDir, 'tools/webpack/webpack.main.js'),
        // Renderer process webpack configuration
        renderer: {
          // Configuration file path
          config: path.join(rootDir, 'tools/webpack/webpack.renderer.js'),
          // Entrypoints of the application
          entryPoints: [
            {
              // Window process name
              name: 'app_window',
              // React Hot Module Replacement (HMR)
              rhmr: 'react-hot-loader/patch',
              // HTML index file template
              html: path.join(rootDir, 'src/renderer/index.html'),
              // Renderer
              js: path.join(rootDir, 'src/renderer/appRenderer.tsx'),
              // Main Window
              // Preload
              preload: {
                js: path.join(rootDir, 'src/renderer/appPreload.tsx'),
              },
            },
          ],
        },
        devServer: {
          liveReload: false,
        },
      },
    },
  ],
}
