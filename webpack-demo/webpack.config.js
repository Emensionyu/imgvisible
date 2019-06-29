// const path = require('path');
// // const CleanWebpackPlugin = require('clean-webpack-plugin');
// // const CleanWebpackPlugin = require('clean-webpack-plugin');

// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//     mode:'development',
//   entry: './src/index.js',
//   plugins: [
//     // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
//     // new CleanWebpackPlugin(),
//     // new CleanWebpackPlugin(),
//     new HtmlWebpackPlugin({
//     title: 'Caching'
//     })
//   ],
//   output: {
//      filename: '[name].[contenthash].js',
//     path: path.resolve(__dirname, 'dist')
//   },
//   devtool:'inline-socurce-map',
//   optimization: {
//          runtimeChunk: 'single',
//          splitChunks: {
//            cacheGroups: {
//              vendor: {
//                test: /[\\/]node_modules[\\/]/,
//               name: 'vendors',
//               chunks: 'all'
//            }
//            }
//          }
//         }
// };

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
  entry: {
    index: './src/index.js',
    // vendor: ['jquery'] //vendor 就是提取公共文件的地方 把公共代码相关的库提取出来。
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist')
  },
  //   devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    port: 3000,
    open: true,
    hot: true //开启热更新
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: '/src/',
        exclude: /node_modules/ //排除掉node_modules，优化打包速度
      },
      {
        test: /\.css$/,
        use: ExtractTextWebpackPlugin.extract({
          use: ['css-loader', 'postcss-loader'],
          publicPath: '../'

        })
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,    // 小于8k的图片自动转成base64格式，并且不会存在实体图片
              outputPath: 'images/'   // 图片打包后存放的目录
            }
          }
        ]
      },
      {
        test: /.(html|html)$/,
        use: 'html-withimg-loader'
        //img标签 img引用图片地址需要一个loader来处理
      }

    ]
  },
  plugins: [
    // new CleanWebpackPlugin('dist'),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'Development',
      chunks:"vendor"
    }),
    // 拆分后会把css文件放到dist目录下的css/style.css
    new ExtractTextWebpackPlugin('css/style.css'),

    // new webpack.optimize.CommonsChunkPlugin({
    //     name: 'commons',
    //     // (the commons chunk name)

    //     filename: 'commons.js',
    //     // (the filename of the commons chunk)

    //     // minChunks: 3,
    //     // (Modules must be shared between 3 entries)

    //     // chunks: ["pageA", "pageB"],
    //     // (Only use these entries)
    //   }),
    // new webpack.DllPlugin({
    //   // DllPlugin的name属性需要和libary保持一致
    //   name: '[name]_[hash]',
    //   path: path.join(__dirname, 'dist', '[name]-manifest.json'),
    //   // context需要和webpack.config.js保持一致
    //   context: __dirname,
    // }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].bundle.js',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: 'initial',
          minChunks: 2,
          maxInitialRequests: 5, // The default limit is too small to showcase the effect
          minSize: 0, // This is example is too small to create commons chunks
          name: 'common'
        }
      }
    }
  },

  //绑定所有的入口文件
  // optimization: {
  //   splitChunks: {
  //       cacheGroups: {
  //           vendor: {   // 抽离第三方插件
  //               test: /node_modules/,   // 指定是node_modules下的第三方包
  //               chunks: 'initial',
  //               name: 'vendor',  // 打包后的文件名，任意命名    
  //               // 设置优先级，防止和自定义的公共代码提取时被覆盖，不进行打包
  //               priority: 10    
  //           },
  //           utils: { // 抽离自己写的公共代码，utils这个名字可以随意起
  //               chunks: 'initial',
  //               name: 'utils',  // 任意命名
  //               minSize: 0    // 只要超出0字节就生成一个新包
  //           }
  //       }
  //   }
  // },

}