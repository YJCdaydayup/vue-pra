/**
 * Created by yangli on 2018/9/22.
 */


// 服务器端的环境是固定的不像前端，不同的浏览器环境不一样，所以需要代码进行编译，不需要编译
 // 支持ES6语法
let user = require('./User'); // requrie是在安装node时就已经安装进来了，这里直接使用

console.log(user.userName);
console.log(user.sayHello());


// 1.引入http模块直接使用
let http = require('http');

// 2.用于解析请求地址
let url = require('url');

// 3.调试用的，将url对象解析成json字符串
let util = require('util');

let server = http.createServer((req, res)=>{
  res.statusCode = 200;

  // 设置响应头
  res.setHeader("Content-Type","text/plain; charset=utf-8");

  // 只能拿到url的相对路径，拿不到协议 域名 hash
  console.log(req.url); // index.html?a=123

  // 解析url
  let urlparser = url.parse(req.url); // object

  //  将解析的url对象解析成json字符串
  let urlUtil = util.inspect(urlparser); // 调试用的，一般就是要拿他的对象

  /**
   * Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: null,
  query: null,
  pathname: '/index.html',
  path: '/index.html',
  href: '/index.html' }
   **/

  // 返回输出
  res.end(urlUtil);

});

server.listen(3000,'127.0.0.1',()=>{
  console.log("服务器已经运行，请输入http://127.0.0.1:3000/来进行访问")
});





