/**
 * Created by yangli on 2019/8/28.
 */

'use strict'

const http = require('http')
const querystring = require('querystring');
const formidable = require('formidable');
const fs = require('fs');
const sd = require('silly-datetime');
const path = require('path');
const util = require('util')

let server = http.createServer(function (req, res) {
    if (req.url === '/doPost' && req.method.toLowerCase() === 'post') {
        let form = new formidable.IncomingForm();
        // 设置图片上传路径,必须提前创建好这个文件夹
        form.uploadDir = './uploads';
        // 执行里面的回调函数的时候，表单已经接收完毕了
        form.parse(req, (err, fields, files)=> {

            if (err) {
                throw err;
            }

            // 文件数据存储在files里面，对象的key值就是上传的文件的key值，这里form里面就是img
            let extname = path.extname(files.img.name);
            let oldPath = path.join(__dirname, files.img.path);
            let newPath = path.join(__dirname, 'uploads', sd.format(new Date(), 'YYYYMMDDHHmm') + ''+ parseInt(Math.random() * 89999 + 10000) + extname);

            console.log(oldPath)
            console.log(newPath);

            fs.rename(oldPath, newPath, (err)=> {
              if (!err) {
                  console.log(util.inspect(fields));
                  console.log(util.inspect(files))
                  // 所有文本域，单选框都在fields里面
                  // 所有文件都在files里面
                  res.writeHead(200, {
                      'content-type': 'text/plain'
                  });
                  res.write('Success');
                  res.end();
                  // res.end(util.inspect({
                  //     fileds: fields,
                  //     files: files
                  // }));
              }
            })
        })
    }
})

server.listen(3000);