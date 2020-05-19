// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// // const webpack = require('webpack');
// // const WorkboxPlugin = require('workbox-webpack-plugin');
// // const webpack = require('webpack');
// module.exports = {
//   mode: 'development',
//   entry: {
//     index: './src/index.js',
//     // polyfills: './src/polyfills.js',
//   },
//   output: {     
//     // filename: '[name].[contenthash].js',
//     filename: '[name].bundle.js',
//     chunkFilename: '[name].bundle.js',// 比如打包公共库lodash到一个文件中
//     path: path.resolve(__dirname, 'dist')
//   },
//   devtool: 'inline-source-map',
//   module: {
//     rules: [
//       // {
//       //   test: require.resolve('index.js'),
//       //   use: 'imports-loader?this=>window'
//       //   // CommonJS  imports-loader 覆盖 this 指向
//       // },
//       // {
//       //   test: require.resolve('globals.js'),
//       //   use: 'exports-loader?file,parse=helpers.parse'
//       //   //library没有导出exports-loader将一个全局变量作为一个普通的模块来导出
//       // } --window 配置export-loader 会报错，直接在文件里require不会报错
//     ]
//   },
//   plugins: [
//     // new BundleAnalyzerPlugin({
//     //     analyzerMode:'disabled',
//     //     generateStatsFile:true,
//     //     logLevel:'silent'
//     // }),
//     new HtmlWebpackPlugin({
//       title: 'source-map'
//     }),
//     // new webpack.HashedModuleIdsPlugin()
//     // new webpack.ProvidePlugin({
//     //   join: ['lodash', 'join']
//     // }),
//     //  new WorkboxPlugin.GenerateSW({
//     //      // 这些选项帮助快速启用 ServiceWorkers
//     //      // 不允许遗留任何“旧的” ServiceWorkers
//     //      clientsClaim: true,
//     //      skipWaiting: true
//     //    })
//   ],
//   //  optimization: {
//   //      runtimeChunk: 'single',
//   //      splitChunks: {
//   //         cacheGroups: {
//   //           vendor: {
//   //             test: /[\\/]node_modules[\\/]/,
//   //             name: 'vendors',
//   //             chunks: 'all'
//   //           }
//   //         }
//   //       }
//   //    }

// };
const path = require('path');
// const MyPlugin=require('./MyPlugin')
const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); // --v1 v2
module.exports = {
    entry: {
        index: './src/index.js',
    },
    devServer: {
        contentBase: './dist',
        hot: true
    },
    devtool: 'inline-source-map',
    plugins: [
        new HTMLWebpackPlugin({
            title: '进度球'
        }),

        // new MyPlugin()
        // new webpack.optimize.CommonsChunkPlugin({       --v1代码分离
        //        name: 'common' // 指定公共 bundle 的名称。--提取公共模块
        //      })
        // new webpack.optimize.CommonsChunkPlugin({          //--v2 缓存
        //         name: 'manifest' //能够在每次修改后的构建结果中，将 
        //         // webpack 的样板(boilerplate)和 manifest 提取出来。
        //         // 通过指定 entry 配置中未用到的名称，此插件会自动将
        //         // 我们需要的内容提取到单独的包中：
        //       })
        //  new webpack.optimize.CommonsChunkPlugin({
        //      name: 'vendor' // --v2 
        //                     //命中缓存来消除请求，并减少向服务器获取资源，
        //                     //同时还能保证客户端代码和服务器端代码版本一致
        //    }),

    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        chunkFilename: '[name].bundle.js',
    }
};