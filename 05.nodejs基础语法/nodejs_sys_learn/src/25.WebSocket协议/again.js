'use strict'

const http = require('http');
const fs = require('fs');
let server = http.createServer((req, res)=> {
    if (req.url === '/') {
        fs.readFile('./index_again.html', 'utf8', (err, data)=> {
            if (err) {
                throw err;
            }
            res.end(data);
        });
        return;
    }
    res.end('你好123')
});


const socketio = require('socket.io');
let io = socketio(server);

io.on('connection', (socket) => {
    socket.on('send', (msg) => {
        console.log(msg);
        io.emit('back', msg);
    })
});

server.listen(3000);