const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { devServer } = require('./webpack.dev-server.config')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: ['./src/index.tsx'],
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    fallback: { querystring: false },
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        include: path.resolve(__dirname, 'src'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              compact: false,
              cacheDirectory: true,
              cacheCompression: false,
            }
          },
          {
            loader: '@linaria/webpack5-loader',
            options: {
              sourceMap: false,
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new HtmlWebPackPlugin({
      chunksSortMode: 'none',
      template: './src/index.html',
      collapseWhitespace: true,
    }),
  ],

  devServer
}
