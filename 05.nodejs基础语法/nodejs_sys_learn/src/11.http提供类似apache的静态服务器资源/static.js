'use strict'

const http = require('http');
const fs = require('fs')

const url = require('url');

let server = http.createServer((req, res)=> {
  let pathname = url.parse(req.url);
  // 真正读取这个文件
  fs.readFile('./static/' + pathname, (err, data)=> {
    if (err) {
      fs.readFile('./static/err.html','utf8', (err, data)=> {
       if (!err) {
         res.writeHead(404,{
           'Content-type': "text/html;charset=utf8"
         })
         console.log(data)
         res.end(data);
       }
       return;
      })
    }
    res.end(data);
  })
})

server.listen(3000);


