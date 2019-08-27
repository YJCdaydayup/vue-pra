'use strict'

const http = require('http');
const fs = require('fs')
const url = require('url');
const path = require('path');
const mine = require('./mime.json')

let server = http.createServer((req, res) => {
    let obj = url.parse(req.url,true);
    if (req.url === '/favicon') {
        return ;
    }
    if (req.url === '/') {
        obj.pathname = '/index.html'
    }
    // 真正读取这个文件
    fs.readFile(path.join('./static/',obj.pathname), (err, data) => {
        if (err) {
            fs.readFile('./static/err.html', 'utf8', (err, data) => {
                if (!err) {
                    res.writeHead(404, {
                        'Content-type': "text/html;charset=utf8"
                    })
                    res.end(data);
                }
            })
        }else {
            let extname = path.extname(obj.pathname);
            let type = genContentType(extname)
            res.writeHead(200,{
                'Content-type':type + ';charset=utf8'
            })
            res.end(data);
        }
    })
})

function genContentType(extname) {
    return mine[extname];
}

server.listen(3000);


