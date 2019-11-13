'use strict'

const express = require('express');
const router = require('./router/router');

let app = express();

app.set('view engine', 'ejs');


app.get('/',router.showStudents);
app.get('/add',router.showAdd);
app.get('/doAdd',router.doAdd);
app.get('/delete/:sid',router.deleteStudent);
app.get('/edit/:sid',router.showEdit);
app.get('/doEdit/:sid',router.doEdit);

app.listen(3000);

