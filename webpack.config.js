const path = require('path');

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
  }
}
