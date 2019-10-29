/**
 * Created by yangli on 2019/10/29.
 */

const mongoose = require('mongoose');

let db = mongoose.createConnection('mongodb://127.0.0.1:27017/heheda');

db.once('open', (callback)=> {
   console.log('数据库连接成功');
});

module.exports = db;