'use strict'

const http = require('http');
const formidable = require('formidable');
const path = require('path');
const util = require('util');
const sd = require('silly-datetime');
const fs = require('fs');
const url = require('url');
const ejs = require('ejs');


let server = http.createServer();

server.on('request', function (req, res) {
    let obj = url.parse(req.url);
    if (req.method.toLowerCase() === 'post') {
        if (obj.pathname === '/upload') {
            let form = new formidable.IncomingForm();
            form.uploadDir = './uploads';
            form.parse(req, function (err, fields, files) {

                if (err) {
                    throw err;
                }
                console.log(files.file.path);
                let oldPath = path.join(__dirname, files.file.path);
                let extname = path.extname(files.file.name);
                let newPath = path.join(__dirname, 'uploads', sd.format(new Date(), 'YYYYMMDDHHmmss') + parseInt((Math.random() * 10000 + 99995)) + extname)
                fs.rename(oldPath, newPath, () => {
                    res.writeHead(200, {'content-type': 'text/plain'});
                    res.write('received upload:\n\n');
                    res.end(util.inspect({fields: fields, files: files}));
                })
            });
        }
    } else {
        if (obj.pathname === '/' || obj.pathname === '/index.html') {
            ejs.renderFile(path.join(__dirname, 'views', 'index.ejs'), {
                title: '首页',
                name: '例如:Sara',
                age: "例如:18"
            }, (err, data) => {
                res.writeHead(200, {
                    'content-type': 'text/html;charset=utf-8'
                });
                res.end(data);
            })
        } else if (['.js', '.css'].indexOf(path.extname(obj.pathname)) > -1) {
            fs.readFile(path.join('./views', obj.pathname), 'utf8', (err, data) => {
                res.end(data);
            })
        } else if (obj.pathname === '/checkImage') {
            fs.readdir(path.join(__dirname, 'uploads'), (err, files) => {
                if (err) {
                    throw err;
                }
                ejs.renderFile(path.join(__dirname, 'views', 'image.ejs'), {
                    title: '查看图片',
                    imgs: files
                }, (err, data) => {
                    if (err) {
                        throw err;
                    }
                    res.writeHead(200, {
                        'content-type': 'text/html;charset=utf-8'
                    });
                    res.end(data);
                })
            })
        } else if (['.jpg', '.png', '.jpeg'].indexOf(path.extname(obj.pathname)) > -1) {
            fs.readFile(path.join(__dirname, obj.pathname), (err, data) => {
                res.end(data);
            })
        }
    }
})

server.listen(3000);