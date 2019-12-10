const path = require('path');
const {VueLoaderPlugin} = require('vue-loader')
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/lib/index.js",
    mode: "development",
    output: {
        path: path.join(__dirname, './dist'),
        filename: "vue-toast-demo.js"
    },
    devServer: {
        open: true,//自动打开浏览器
        port: 3001,//设置启动端口
        // contentBase:'src',//指定托管的根目录
        hot: true,//启用热更新 第一步

    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                exclude: /node_modules/,
                include: __dirname + '/src'
            },
            {
                test: /\.css$/,
                loader: "vue-style-loader!css-loader",
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: './test.html',
            inject: 'head'
        })
    ]
}