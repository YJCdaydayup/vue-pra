/**
 * Created by yangli on 2018/10/13.
 */

var  path = require('path');
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
        libraryTarget: 'umd',
        library: 'VueToastDemo'
    },
    // loader加载器
    module: {
        rules: [
            // 匹配的文件
            {
                test: /\.vue$/,
                // 对于不认识的文件，就需要loader
                loader: 'vue-loader',
                exclude: /node_modules/,
                options: {
                    loaders: {
                        scss: 'style-loader!css-loader!sass-loader'
                    }
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: path.join(__dirname, 'src'),
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        
    ]
}
