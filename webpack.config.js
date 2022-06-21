const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

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
       },
       {
         test:/\.css$/,
         use:[
            MiniCssExtractPlugin.loader,
            'css-loader'
         ]
       },
      {
        test:/\.(png|jpg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'src/assets[hash][ext]'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin(),
    new CopyWebpackPlugin({ 
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets/icons'),
          to: 'assets/icons'
        },
        {
          from: path.resolve(__dirname, 'src/assets/images'),
          to: 'assets/images'
        }
      ]
    })
  ]
}
