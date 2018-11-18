const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // entry: ['./src/script/main.js','./src/script/a.js'],
  entry: {
    main: './src/script/main.js',
    a: './src/script/a.js',
    b: './src/script/b.js',
    c: './src/script/c.js'
  },
  output: {
    path: __dirname + '/dist',
    // filename: '[name]-[chunkhash]bundle.js'
    filename: 'js/[name]-[hash].bundle.js',
    publicPath: 'http://cdn.com/' // 如果加上这个，生成的js就带有生产的地址了
  },

  plugins: [
      new htmlWebpackPlugin({
        filename: 'a.html',
        template: 'index.html',
        inject: false, // 将js脚本嵌入到head标签里面
        title: 'this is a.html',
        // date: new Date(),
        minify: {
          removeComments: false,    // 删除注释
          collapseWhitespace: false // 删除空格
        },
        // chunks: ['main', 'a']
        excludeChunks:['b','c']
      }),
    new htmlWebpackPlugin({
      filename: 'b.html',
      template: 'index.html',
      inject: false, // 将js脚本嵌入到head标签里面
      title: 'this is b.html',
      // date: new Date(),
      minify: {
        removeComments: false,    // 删除注释
        collapseWhitespace: false // 删除空格
      },
      chunks: ['main','b']
    }),
    new htmlWebpackPlugin({
      filename: 'c.html',
      template: 'index.html',
      inject: false, // 将js脚本嵌入到head标签里面
      title: 'this is c.html',
      // date: new Date(),
      minify: {
        removeComments: false,    // 删除注释
        collapseWhitespace: false // 删除空格
      },
      chunks: ['main','c']
    }),


  ]
}