'use strict'

const express = require('express');
const fs = require('fs');
const path = require('path');

let app = express();

app.use('/static',express.static('./public'));

// app.use('/static', (req, res) => {
//     let path1 = req.path;
//     console.log(path.join(__dirname, '/public/', path1));
//     fs.readFile(path.join(__dirname, '/public/', path1), (err, data) => {
//         // if (data) {
//         // res.send(data);
//         // } else {
//         //     next();
//         // }
//         res.end(data);
//     })
// })

app.listen(3000);