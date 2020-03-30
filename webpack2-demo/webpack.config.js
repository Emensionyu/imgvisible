const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
var ManifestPlugin = require('webpack-manifest-plugin');
const webpack = require('webpack');
module.exports = {
  entry: {
    // app: './src/index.js',
    // print: './src/print.js'
    app: './src/index.js',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },   
  // HtmlWebpackPlugin 还是会默认生成 index.html 文件
  devtool: 'inline-source-map',
  // devServer: {
  //     contentBase: './dist',
  //     hot: true
  // },
  mode: "production",
  module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    },
  plugins: [
    // new CleanWebpackPlugin(['dist']),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ManifestPlugin(),
     new HtmlWebpackPlugin({
       title: 'Output Management'
     })
   ],
};