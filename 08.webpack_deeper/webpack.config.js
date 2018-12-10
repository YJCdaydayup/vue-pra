var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
module.exports = {
    devtool:'eval-source-map',
    context: __dirname,
    entry: './src/app.js',
    output: {
        path: __dirname + '/dist',
        filename: 'js/[name].bundle.js'
    },
    // 独立于整个打包系统，生成一个外部可访问的网页
    devServer:{
        host: 'localhost', //可选，ip
        port: 3000, //可选，端口
        contentBase:path.resolve(__dirname,'dist'), //可选，基本目录结构
        compress: false //可选，压缩
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: path.resolve(__dirname, 'node_modules'),
                include: path.resolve(__dirname, 'src'),
                query: {
                    presets: ["latest"]
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        // 作用与@import导入的css文件
                        options: {
                            importLoaders: 1
                        }
                    },
                    'postcss-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        // 作用与@import导入的css文件
                        options: {
                            importLoaders: 1
                        }
                    },
                    'postcss-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.tpl$/,
                loader: 'ejs-loader'
            },
            // {
            //     test: /\.(jpg|png|gif|svg)$/,
            //     loader: 'file-loader',
            //     query: {
            //         name: 'assets/[name]-[hash].[ext]'
            //     }
            // }
            {
                test: /\.(jpg|png|gif|svg)$/,
                loaders: [
                    "url-loader?limit=2000&name=assets/[name]-[hash].[ext]",
                    // 先压缩
                    "image-webpack-loader"
                ]
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: 'body'
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: function(){
                    return [
                        require('postcss-import')(),
                        require("autoprefixer")({
                            browsers: ['last 5 versions']
                        })
                    ]
                }
            }
        })
    ]
}