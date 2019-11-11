'use strict'

const express = require('express');
const router = require('./router/router');

let app = express();
app.set('view engine', 'ejs');

app.get('/',router.showIndex);
app.get('/add', router.showadd);
app.get('/doadd', router.doadd);
app.get('/edit/:sid',router.edit);

app.get('/doedit/:sid',router.doedit);


app.get('/delete/:sid',router.deleteStudent);

app.listen(3000);
