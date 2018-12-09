const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // entry: ['./src/script/a.js','./src/script/b.js'],
    entry: {
        a: ['./src/script/a.js'],
        b: ['./src/script/b.js'],
        c: ['./src/script/c.js'],
        main: ['./src/script/main.js']
    },
    output: {
        path: __dirname + '/dist',
        filename: 'js/[name]-[hash].bundle.js',
        publicPath: 'http://cdn.com/'
    },
    plugins: [
        new htmlWebpackPlugin({
            template: 'index.html',
            filename: 'a.html',
            inject: false,
            title: 'this is a.html',
            date: new Date(),
            chunks: ['c', 'a','main']
        }),
        new htmlWebpackPlugin({
            template: 'index.html',
            filename: 'b.html',
            inject: false,
            title: 'this is b.html',
            date: new Date(),
            chunks: ['b', 'a','main']
        })
    ]
};
