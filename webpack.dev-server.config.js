const { resolve } = require('path')

module.exports.devServer = {
  host: 'localhost',
  port: 3000,
  historyApiFallback: true,
  client: {
    overlay: true,
    progress: true,
    logging: 'error',
  },
  static: resolve(__dirname, 'dist'),
}
