var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    entry: {
        index: './src/js/index.js',
        cart: './src/js/cart.js',
        vendor: ["jquery", './src/js/common.js'],
    },
    output: {
        path: __dirname + '/dist',
        filename: 'js/[name].js',
        publicPath: ''
    },
    devServer: {
        port: 9000, //端口改为9000
        open:true, // 自动打开浏览器，每次启动服务器会自动打开默认的浏览器
        inline:true, // 默认为true, 意思是，在打包时会注入一段代码到最后的js文件中，用来监视页面的改动而自动刷新页面,当为false时，网页自动刷新的模式是iframe，也就是将模板页放在一个frame中
        hot:false,
        compress:true //压缩
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                include: __dirname + '/src',
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'postcss-loader'
                    }
                ]
            },
            // {
            //     test: /\.css$/,
            //     // include: __dirname + '/src',
            //     exclude: /node_modules/,
            //     use: ExtractTextWebpackPlugin.extract({
            //         fallback: "style-loader",
            //         use: 'css-loader'
            //     })
            // },
            {
                test: /\.js$/,
                include: __dirname + '/src',
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ["env"]
                }
            },
            {
                test: require.resolve('jquery'),
                use: [{
                    loader: 'expose-loader',
                    options: 'jQuery'
                },{
                    loader: 'expose-loader',
                    options: '$'
                }]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(["./dist"], {
            root: __dirname + '',
            verbose: true,
            dry: false
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            inject: 'head',
            chunks: ['index','vendor'],
            minify: {
                // removeCommonts: true,
                // collapseWhitespace: true
            }
        }),
        new HtmlWebpackPlugin({
            filename: 'cart.html',
            template: './src/cart.html',
            inject: 'head',
            chunks: ['cart','vendor']
        }),
        // new webpack.optimization.splitChunks({
        //     name: 'vendor',
        //     chunks: ['index','cart','vendor'],
        //     mikChunk: 3
        // }),
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: true
        //     }
        // }),
        // new ExtractTextWebpackPlugin("index.css")
        new webpack.optimization.splitChunks({
            chunks: 'async',//默认只作用于异步模块，为`all`时对所有模块生效,`initial`对同步模块有效
            minSize: 30000,//合并前模块文件的体积
            minChunks: 1,//最少被引用次数
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',//自动命名连接符
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    minChunks: 1,//敲黑板
                    priority: -10//优先级更高
                },
                default: {
                    test: /[\\/]src[\\/]js[\\/]/,
                    minChunks: 2,//一般为非第三方公共模块
                    priority: -20,
                    reuseExistingChunk: true
                }
            },
            runtimeChunk: {
                name: 'manifest'
            }
        })
    ]
}
