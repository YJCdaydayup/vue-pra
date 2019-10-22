'use strict'

const express = require('express');
const ejs = require('ejs');

let app = express();

app.set('view engine', 'ejs');

app.get('/',function (req, res) {
    res.render('index',{
        names: [
            '站衫','历史','王五'
        ],
        ages: [
            1,2,3,4,5,6
        ]
    });
})

app.listen(3000);