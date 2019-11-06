var path = require('path')

console.log(path.normalize('.'))

// 连接路径，最后一个参数用于生产的路径找出上一级或者上几级目录
console.log('joint path : ' + path.join('test', 'test1', '2slashes/1slash', '/tab','./../../../..'));

// 转换为绝对路径,以当前路径为基础，转化为绝对路径
console.log('resolve : ' + path.resolve('main.js'));

// 格式化路径
console.log('normalization : ' + path.normalize('/test/test1//2slashes/1slash/tab/..'));

console.log(path.extname('x.xx'))