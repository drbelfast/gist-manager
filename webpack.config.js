const path = require('path')

const ENTRY_PATH = path.resolve(__dirname, 'app/index.js')
const DIST_PATH = path.resolve(__dirname, 'dist')

module.exports = {
  entry: ENTRY_PATH,
  output: {
    path: DIST_PATH,
    publicPath: '/dist/',
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: ENTRY_PATH,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
}
