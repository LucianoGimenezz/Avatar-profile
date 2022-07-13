const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const DotEnv = require('dotenv-webpack');

module.exports = {
  entry: './src/index',
  output: {
    clean:true,
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js'
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      "@images":path.resolve(__dirname,'src/assets/images'),
      "@icons": path.resolve(__dirname, 'src/assets/icons'),
      "@styles": path.resolve(__dirname, 'src/styles')
    }
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
      },
      {
        test:/\.(woff|woff2)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name][hash][ext]'
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
    new MiniCssExtractPlugin({
      filename: 'assets/[name][hash].css'
    }),
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
    }),
    new DotEnv(),
  ],
  optimization: {
    minimize:true,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin()
    ]
  }
}
