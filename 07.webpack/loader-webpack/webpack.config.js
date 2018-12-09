var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: __dirname,
    entry: "./src/app.js",
    output: {
        path: __dirname + '/dist',
        filename: 'js/[name].budle.js'
    },
    module: {
    	rules: [
    		{
    			test: /\.js$/,
    			loader: 'babel-loader', // 非常耗时的语法转换
                // exclude: './node_modules/', // 这些不需要转换
                // include: './src/',
                // resolve()解析
                exclude: path.resolve(__dirname, 'node_modules'),
                include: path.resolve(__dirname, 'src'),
    			query: {
    				presets: ["latest"]
    			}
    		},
            {
                test: /\.css$/,
                // css处理样式，style插入页面中，从右到左执行，先postcss
                // importLoaders=1是指定css-loader前1个loader处理所有的import进来的文件
                loader: 'style-loader!css-loader?importLoaders=1!postcss-loader',
                // loaders: [
                //     'style-loader',
                //     'css-loader',
                //     'postcss-loader'
                // ]
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!postcss-loader!less-loader',
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!postcss-loader!sass-loader',
    		},
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.tpl$/,
                loader: 'ejs-loader'
            },
            // {
            //     // css中的图片指定
            //     test: /\.(png|jpg|gif|svg)$/,
            //     loader: 'file-loader',
            //     query: {
            //         name: 'assets/[name]-[hash].[ext]'
            //     }
            // }
            {
                // css中的图片指定
                test: /\.(png|jpg|gif|svg)$/,
                // loader: 'url-loader',
                loaders: [
                    "url-loader?limit=20000&name=assets/[name]-[hash].[ext]",
                    // 先压缩
                    "image-webpack"
                ],
                // query: {
                //     // 大于这个值就使用fileloader，通过http请求load进来有缓存 小于就转化成base64打包进文件中了无缓存
                //     limit: 20000,
                //     name: 'assets/[name]-[hash].[ext]'
                // }
            }
    	]
    },
    // 在这里为postcss-loader做配置
    postcss: [
        require('autoprefixer')({
            // 最近的五个浏览器版本适配处理
            broswers: ['last 5 versions']
        })
    ],
    plugins: [
    	new htmlWebpackPlugin({
    		filename: 'index.html',
    		template: 'index.html',
    		inject: 'body'
    	})
    ]
}
