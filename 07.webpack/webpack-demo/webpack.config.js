const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // entry: ['./src/script/main.js','./src/script/a.js'],
  entry: {
    main: './src/script/main.js',
    a: './src/script/a.js',
  },
  output: {
    path: __dirname + '/dist',
    // filename: '[name]-[chunkhash]bundle.js'
    filename: 'js/[name]-[hash].bundle.js',
    publicPath: 'http://cdn.com/' // 如果加上这个，生成的js就带有生产的地址了
  },

  plugins: [
      new htmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html',
        inject: 'false', // 将js脚本嵌入到head标签里面
        title: 'WEBPACK IS GOOD!!!',
        date: new Date(),
        minify: {
          removeComments: true,    // 删除注释
          collapseWhitespace: true // 删除空格
        }
      })
  ]
}