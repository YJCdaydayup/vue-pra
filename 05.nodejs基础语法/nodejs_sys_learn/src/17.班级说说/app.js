'use strict'

const express = require('express');
const ejs = require('ejs');
const router = require('./router/router');

let app = express();

app.set('view engine', 'ejs');
app.use(express.static('./public'));

app.get('/', router.showIndex);

app.listen(3000);
