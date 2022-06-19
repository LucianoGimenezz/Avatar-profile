const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode: 'development',
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
       {
         test: /\.js$/,
         exclude: /node_modules/,
         use: {
          loader: 'babel-loader'
         }
       }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html',
      filename: './index.html'
    })
  ]
}
