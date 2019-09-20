var WebSocketServer = require('ws').Server,
    wss = new WebSocketServer({ port: 3001 });
wss.on('connection', function (ws) {
    console.log('client connected');
    ws.on('message', function (message) {
        console.log(message);
    });
});
