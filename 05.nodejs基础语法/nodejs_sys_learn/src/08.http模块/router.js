const fs = require('fs');

// function Router(request, response) {
//     this.request = request;
//     this.response = response;
//     this.createRouter();
// }
//
// Router.prototype.createRouter = function () {
//     let me = this;
//     let url = this.request.url;
//     let method = this.request.method;
//     if (url === '/index.html' && method === 'GET') {
//         this.response.writeHead(200, {
//             'Content-Type': 'text/html;charset=utf8'
//         })
//         fs.readFile('./src/index.html', 'utf8', (err, data) => {
//             if (!err) {
//                 me.response.write(data);
//                 me.response.end();
//             }
//         })
//     } else if (url === '/index.css') {
//         this.response.writeHead(200, {
//             'Content-Type': 'text/html;charset=utf8'
//         })
//         fs.readFile('./src/index.css', 'utf8', (err, data) => {
//             if (!err) {
//                 me.response.write(data);
//                 me.response.end();
//             }
//         })
//     } else if (url === '/index.js' && method === 'GET') {
//         fs.readFile('./src/index.js', 'utf8', function (err, data) {
//             if (!err) {
//                 me.response.write(data);
//                 me.response.end();
//             }
//         })
//     }
// }

function Router(request, response) {
    this.request = request;
    this.response = response;
    this.createRouter();
}

Router.prototype.createRouter = function () {
    let me = this;
    let url = this.request.url;
    let method = this.request.method;
    if (url === '/index.html' && method === 'GET') {
        this.response.writeHead(200, {
            'Content-Type': 'text/html;charset=utf8'
        })
        fs.readFile('./src/index.html', 'utf8', (err, data) => {
            if (!err) {
                me.response.write(data);
                me.response.end();
            }
        })
    } else if (url === '/index.css') {
        this.response.writeHead(200, {
            'Content-Type': 'text/html;charset=utf8'
        })
        fs.readFile('./src/index.css', 'utf8', (err, data) => {
            if (!err) {
                me.response.write(data);
                me.response.end();
            }
        })
    } else if (url === '/index.js' && method === 'GET') {
        fs.readFile('./src/index.js', 'utf8', function (err, data) {
            if (!err) {
                me.response.write(data);
                me.response.end();
            }
        })
    }

    let data = [];

    this.request.on('data', (chunk) => {
        data.push(chunk);
    })

    this.request.on('end', () => {
        console.log(data.toString());
        this.response.end('123')
    })
}

module.exports = Router;