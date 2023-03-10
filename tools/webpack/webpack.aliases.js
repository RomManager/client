const { createWebpackAliases } = require('./webpack.helpers')

// Export aliases
module.exports = createWebpackAliases({
  '@assets': 'assets',
  '@components': 'src/renderer/components',
  '@common': 'src/common',
  '@main': 'src/main',
  '@renderer': 'src/renderer',
  '@src': 'src',
  '@misc': 'misc',
  '@state': 'src/renderer/state',
  '@pages': 'src/renderer/pages',
})
