const mongoose = require('mongoose');

let db = mongoose.createConnection('mongodb://localhost:27017/tushu');

db.on('open',()=>{
    console.log('数据库连接成功');
});

exports.db = db;