"use strict"

const express = require('express');
const ejs = require('ejs');
const router = require('./controller')

let app = express();

app.set('view engine', 'ejs');

app.use(express.static('./public'));
app.use(express.static('./uploads'));

app.get('/',router.showMain);

app.get("/:id",router.showAlbumImages);

app.get('/uploads',router.uploads);

app.post('/upInfo',router.upInfo);

app.use(function (req, res) {
    res.render('err');
})

app.listen(3001);

