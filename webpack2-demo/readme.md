## webpack插件
> webpack-merg 合并对各webpack配置
> UglifyJSPlugin 代码压缩
> HtmlWebpackPlugin 管理输出html文件
> webapck 内置插件 DefinePlugin 定义环境变量
> SplitChunksPlugin 移除重复模块。
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