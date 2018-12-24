let path = require('path');
let VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
    entry: './src/lib/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'vue-toast-demo.js',
        libraryTarget: "umd", // 输出各种规范的语法
        library: "VueToastDemo" // window的变量名
    },
    module: {
        rules: [
           {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: __dirname + 'node_modules',
                include: __dirname + 'src',
                options: {
                    presets: ['env']
                }
            },
            {
                test: /\.vue$/,
                loader: "vue-loader",
                exclude: __dirname + 'node_modules'
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