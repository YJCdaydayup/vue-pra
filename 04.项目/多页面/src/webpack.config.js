/**
 * Created by yangli on 2018/10/14.
 */

var path = require('path');

// 生成html的插件
var HtmlWebpackPlugin = require('html-webpack-plugin')

var CleanWebpackPlugin = require('clean-webpack-plugin')

var ExtractTestPlugin = require('extract-text-webpack-plugin')

module.exports = {
    // 单页面就一个入口，n页面就会有n个入口
    entry: {
      index: './src/js/index.js',
      cart: './src/js/cart.js'
    },
    output: {
        path: path.join(__dirname,'./dist'),
        filename: 'js/[name].js',
        publicPath: ''
    },
    // 配置loader
    module: {
        rules: [
            {
                test: /\.css$/,
                include: path.join(__dirname, 'src'),
                exclude: /node_modules/,
                // loader: 'style-loader!css-loader'
                use: ExtractTestPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            {
                test: /\.js$/,
                include: path.join(__dirname, 'src'),
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        // 保障打包后的代码是最新的，把上一次的清空
        new CleanWebpackPlugin(['./dist'],{
            root: path.join(__dirname,''),
            verbose : true,
            dry: false
        }),
        // 有几个页面就要写几个，两个以上就要配置了
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            chunks: ['index'] // 保障加载指定的js
        }),
        new HtmlWebpackPlugin({
            filename: 'cart.html',
            template: './src/cart.html',
            chunks: ['cart']
        }),
        new ExtractTestPlugin('index.css')
    ]
    // devtoo: "#source-map" // 方便调试
}

/**
 * 安装步骤:
 * 1. cnpm init
 * 2. cnpm i webpack --save-dev 安装webpack到dev
 * 3.
 **/