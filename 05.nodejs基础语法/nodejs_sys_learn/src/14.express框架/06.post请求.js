'use strict'

const express = require('express');
const bodyParser = require('body-parser');

let app = express();

// app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: false
}))

app.post('/',function (req, res) {
    console.log(req.body);
    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader('Access-Control-Allow-Methods','GET, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers','Origin, Accept, Content-Type')
    res.send(JSON.stringify(req.body));
})

app.listen(3000);

