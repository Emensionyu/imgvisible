const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
// const webpack = require('webpack');
module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js',
  },
  output: {
    // filename: '[name].[contenthash].js',
    filename: 'bundle.js',
    // chunkFilename: '[name].bundle.js',// 比如打包公共库lodash到一个文件中
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      // {
      //   test: require.resolve('index.js'),
      //   use: 'imports-loader?this=>window'
      //   // CommonJS  imports-loader 覆盖 this 指向
      // },
      // {
      //   test: require.resolve('globals.js'),
      //   use: 'exports-loader?file,parse=helpers.parse'
      //   //library没有导出exports-loader将一个全局变量作为一个普通的模块来导出
      // } --window 配置export-loader 会报错，直接在文件里require不会报错
    ]
  },
  plugins: [
    // new BundleAnalyzerPlugin({
    //     analyzerMode:'disabled',
    //     generateStatsFile:true,
    //     logLevel:'silent'
    // }),
    new HtmlWebpackPlugin({
      title: 'Caching'
    }),
    // new webpack.HashedModuleIdsPlugin()
    new webpack.ProvidePlugin({
      join: ['lodash', 'join']
    })
  ],
  //  optimization: {
  //      runtimeChunk: 'single',
  //      splitChunks: {
  //         cacheGroups: {
  //           vendor: {
  //             test: /[\\/]node_modules[\\/]/,
  //             name: 'vendors',
  //             chunks: 'all'
  //           }
  //         }
  //       }
  //    }

};