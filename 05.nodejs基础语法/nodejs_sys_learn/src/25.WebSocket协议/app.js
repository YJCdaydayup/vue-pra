'use strict'


// 原生搭建服务器
const http = require('http');
const fs = require('fs');

let server = http.createServer((req, res)=> {
    if (req.url === '/') {
        fs.readFile('./index.html', 'utf8', (err, data)=> {
            if (err) {
                throw err;
            }
            res.end(data);
        });
        return;
    }
    res.end('你好123')
});


// http://localhost:3000/socket.io/socket.io.js 可以直接访问了
let socketIo = require('socket.io');
let io = socketIo(server);
// 写完后发现http://localhost:3000/socket.io/socket.io.js可以直接访问了

// 开始写服务器IO的监听
io.on('connection', (socket)=> {
    console.log('1个客户端连接了');
    socket.on('tiwen', (msg)=> {
        console.log(msg);
        // socket.emit('huida','吃了');
        io.emit('huida', msg); // 广播
    });
});

server.listen(3000);