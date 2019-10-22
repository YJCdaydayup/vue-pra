'use strict'

const express = require('express');
const ejs = require('ejs');
const router = require('./router/router');

let app = express();

app.set('view engine', 'ejs');
app.use(express.static('./public'));

app.get('/', router.showIndex);

app.get('/docut', router.docut);

app.get('/insert', router.insertUserInfo);

app.get('/upload',router.upload);

app.post('/saveImage',router.saveImage);

app.listen(8080);