const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const webpack = require('webpack');
module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js',
  },
  output: {
    filename: '[name].[contenthash].js',
    // chunkFilename: '[name].bundle.js',// 比如打包公共库lodash到一个文件中
    path: path.resolve(__dirname, 'dist')
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
  ],
   optimization: {
       runtimeChunk: 'single',
       splitChunks: {
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all'
            }
          }
        }
     }
};