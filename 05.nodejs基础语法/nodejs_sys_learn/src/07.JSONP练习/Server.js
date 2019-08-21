const express = require('express');

let app = express();

app.get('/', (req, res) => {

    let data = {
        status: 0,
        data: [
            {
                name: 'Sara',
                age: 18
            },
            {
                name: 'Keff',
                age: 20
            }
        ]
    }
    data = JSON.stringify(data);
    msg = 'showData(' + data +')';
    res.send(msg);
})

let server = app.listen(8081, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})