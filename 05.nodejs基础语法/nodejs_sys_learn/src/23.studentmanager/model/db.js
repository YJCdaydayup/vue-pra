const mongoose = require('mongoose');

let db = mongoose.createConnection('mongodb://localhost:27017/mgbook');

db.on('open',()=>{
    console.log('数据库连接成功');
});

module.exports = db;
