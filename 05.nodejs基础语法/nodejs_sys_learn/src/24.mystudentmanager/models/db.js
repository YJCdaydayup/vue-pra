const mongoose = require('mongoose');

let db = mongoose.createConnection('mongodb://127.0.0.1:27017/mystudentmanager');

db.once('open', (err) => {
    console.log('数据库已连上');
});

module.exports = db;