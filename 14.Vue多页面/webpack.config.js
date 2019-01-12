let HtmlWebpackPlugin = require('html-webpack-plugin')
let { VueLoaderPlugin } = require('vue-loader')
let vueLoaderConfig = require('./vue-loader.conf')
let CleanWebpackPlugin = require('clean-webpack-plugin')


module.exports = {
    entry: './main.js',
    output: {
        path: __dirname + '/dist',
        filename: 'js/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                exclude: /node_modules/,
                // options: vueLoaderConfig
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loaders: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            inject: 'body'
        }),
        new CleanWebpackPlugin(['./dist'], {
            root: __dirname + '',
            verbose: true,
            dry: true
        })
    ]
}
