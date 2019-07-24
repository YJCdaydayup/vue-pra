let HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: {
        index: './index.js',
        vendor: ["jquery"],
    },
    output: {
        path: __dirname + '/dist',
        filename: 'js/[name].js'
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
                test: /\.css/,
                exclude: /node_modules/,
                loaders: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    'postcss-loader'
                ]
            },
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
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            inject: 'body',
            chunks: ['index','vendor'],
        }),
    ]
}