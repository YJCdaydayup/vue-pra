/**
 * Created by yangli on 2018/9/22.
 */

// 1.引入http模块直接使用
let http = require('http');

// 2.用于解析请求地址
let url = require('url');

// 3.调试用的，将url对象解析成json字符串
let util = require('util');

// 4.访问资源都是这么做的，通过fs文件系统
let fs = require('fs');

let server = http.createServer((req, res)=>{

  // 获取这个object的文件名称
  var pathname = url.parse(req.url).pathname;
  pathname = pathname.substring(1,pathname.length);
  // console.log(pathname);
  fs.readFile(pathname,function (err, data) {
    if (err) {
      res.writeHead(404, {
        "Content-Type": "text/html"
      });
    }else {
      res.writeHead(200, {
        "Content-Type": "text/html"
      });
      res.write(data.toString());
    }
    console.log(data.toString());
    // 返回输出,这个end()要写在文件读取里面
    res.end();
  });

});

server.listen(3000,'127.0.0.1',()=>{
  console.log("服务器已经运行，请输入http://127.0.0.1:3000/来进行访问")
});





