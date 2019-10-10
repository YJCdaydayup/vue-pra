/**
 * Created by yangli on 2019/10/8.
 */

'use strict'

const express = require('express');
const ejs = require('ejs')
const formidable = require('formidable');

let app = express();
let db = require('./model/db');

app.set('view engine', 'ejs');
app.use(express.static('./public'));

app.get('/', (req, res, next)=> {
    res.render('index')
});

app.post('/tijiao', (req, res, next)=> {
    console.log(123)
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
        res.writeHead(200, {'content-type': 'text/plain'});
        console.log(JSON.stringify(fields));
        res.write('received upload:\n\n');
        res.end(util.inspect({fields: fields, files: files}));
    });
});

app.use((req, res)=> {
    console.log(req.url)
    res.send('404');
});

app.listen(3000);