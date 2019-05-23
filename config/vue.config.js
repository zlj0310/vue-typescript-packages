const webpack = require('webpack')
const GLOBALCONFIG = require('./index')
const ENV = process.env
const TARGET = ENV.npm_lifecycle_event

module.exports = {
  publicPath: GLOBALCONFIG.publicPath,
  pages: {
    index: {
      entry: 'src/main.ts',
      template: 'src/index.html',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
  },
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        VERSION: JSON.stringify(process.env.npm_package_version),
        NPMCOMMAND: JSON.stringify(TARGET)
      }),
    ],
  }
}