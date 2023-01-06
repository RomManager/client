import '@misc/window/windowPreload'

// Say something
console.log('[RomManager] : Preload execution started')

// Get versions
window.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app')
  const { env } = process
  const versions: Record<string, unknown> = {}

  // Rom Manager Package version
  versions['rom_manager'] = env['npm_package_version']
  versions['license'] = env['npm_package_license']

  // Set versions to app data
  app.setAttribute('data-versions', JSON.stringify(versions))
})
