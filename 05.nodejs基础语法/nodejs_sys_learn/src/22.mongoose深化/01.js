'use strict'

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/jj');

let db = mongoose.connection;

db.once('open', (err)=> {
    console.log('数据库连接成功');
});

