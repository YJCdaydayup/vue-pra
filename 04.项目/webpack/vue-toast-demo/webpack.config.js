/**
 * Created by yangli on 2018/10/13.
 */

let path = require('path');
let VueLoaderPlugin = require("./node_modules/vue-loader/lib/plugin");
module.exports = {
    // 配置入口，webpack会顺着这入口顺藤摸瓜，把所有的关系网梳理出来，进行打包
    entry: './src/lib/index.js',

    // 配置输出
    output: {
        // 输出相对路径
        path: path.join(__dirname,'./dist'),
        // 就叫插件的名字
        filename: 'vue-toast-demo.js',
        // umd 能打包出AMD CDM CommonJS规范
        // libraryTarget: 'umd',
        // library: 'VueToastDemo'
    },
    // loader加载器
    module: {
        rules: [
            // 匹配的文件
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: path.resolve(__dirname, 'node_modules'),
                include: path.resolve(__dirname, 'src'),
                // query: {
                //     presets: ["latest"]
                // }
            },
            {
                test: /\.css$/,
                loaders: [
                   "style-loader",
                   "css-loader"
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}
