'use strict'

const express = require('express');

let app = express();

app.set('view engine', 'ejs')
app.set('views', __dirname + '/a')

app.get('/', (req, res) => {
    res.render('index',{
        name: 'Sara'
    });
})

app.listen(3000);