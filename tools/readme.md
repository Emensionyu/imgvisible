## webpack插件
> webpack-merg 合并对各webpack配置
> UglifyJSPlugin 代码压缩
> HtmlWebpackPlugin 管理输出html文件

## webapck 内置插件 
>DefinePlugin 定义环境变量
> SplitChunksPlugin 移除重复模块。
> ProvidePlugin  配合tree shaking ，将 lodash library 中的其余没有用到的导出去除
小提示 如何你是window系统，运行时指定环境请用npm run xxx set NODE_ENV=production
## webpack配置选项
>mode 
>optimization
## webapck loader
>mini-css-extract-plugin：用于将 CSS 从主应用程序中分离。
>bundle-loader：用于分离代码和延迟加载生成的 bundle。
>promise-loader：类似于 bundle-loader ，但是使用了 promise API。

## webpack bundle 分析
>![webpack-chart](https://alexkuz.github.io/webpack-chart/) 
 webpack --profile --json > stats.json
<!-- >![webpack-visualizer](https://chrisbateman.github.io/webpack-visualizer/)  -->
>![webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer)  推荐

### webpack 缓存相关
> filename: '[name].[contenthash].js',
以确保 webpack 编译生成的文件能够被客户端缓存，而在文件内容变化后，能够请求到新的文件。
>optimization这个带来页面速度上的提升，因为浏览器会迅速将公共的代码从缓存中取出来，而不是每次访问一个新页面时，再去加载一个更大的文件。
> optimization.splitChunks配置cacheGroups将第三方库提取到公共chunk中，保证 client 代码和 server 代码版本一致
>HashedModuleIdsPlugin 保证vendor hash变化与模块得路径有关

## webpack 处理package
> ProvidePlugin
>  imports-loader export-loaders
> 处理polyfill 

## webpack Workbox 创建离线应用程序
> 添加 Workbox 
> 注册 Service Worker
## 手写一个webpack 插件
https://segmentfault.com/a/1190000019010101
compiler webpack compile 类 属性hooks new hooksync(),方法run 执行事件回调 
compilation 一次编译
plugin 插件类，通过apply (complier)注入compiler,注册hokks方法和回调
