'use strict'

const express = require('express');
const router = require('./router/router');

let app = express();

app.set('view engine', 'ejs');

app.get('/',router.showIndex);
app.get('/addbook',router.addbook);
app.get('/doadd',router.doadd);

app.listen(3000);