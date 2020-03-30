 const merge = require('webpack-merge');
 const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
 const common = require('./webpack.common.js');
 const webpack = require('webpack');
 const prod = process.argv.indexOf('-p') !== -1;
 const config=merge(common, {
   plugins: [
     new UglifyJSPlugin(),
   ],
   module: {
    rules: [
        {
            test: /\.js$/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['es2015']
                }
            }],
            exclude: /node_modules/
        }
    ]
}
 });
 config.plugins = config.plugins||[];
 if (prod) {
   config.plugins.push(new webpack.DefinePlugin({
       'process.env': {
           'NODE_ENV': `"production"`
       }
   }));
 } else {
   config.plugins.push(new webpack.DefinePlugin({
       'process.env': {
           'NODE_ENV': `""`
       }
   }));
 }
 module.exports = config
