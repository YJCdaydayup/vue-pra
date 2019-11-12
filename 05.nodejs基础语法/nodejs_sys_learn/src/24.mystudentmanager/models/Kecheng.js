const mongoose = require('mongoose');
const db = require('./db');

let kechengSchema = new mongoose.Schema({
    kid: String,
    name: String,
    introduce: String,
    students: [String]
});

kechengSchema.statics.getAllKecheng = function (callback) {
    let kechengkv = {};
    this.model('Kecheng').find({}, (err, kechengs) => {
        (function iterator(i) {
            if (Object.keys(kechengkv).length === kechengs.length) {
                !callback ? null : callback(kechengkv);
                return;
            }
            let kecheng = kechengs[i];
            kechengkv[kecheng.kid] = kecheng.name;
            iterator(i + 1);
        })(0)
    });
};

kechengSchema.statics.addStudent = function (sid, callback) {
    this.model('Kecheng').find({}, (err, kechengs) => {
        for (let i = 0; i < kechengs.length; i++) {
            let kecheng = kechengs[i];
            kecheng.addStudent(sid,callback);
        }
    });
};

kechengSchema.methods.addStudent = function (sid, callback) {
    if (this.students.indexOf(sid) > -1) {
        callback('不能重复添加同一个学生号');
    } else {
        this.students.push(sid);
        this.save(callback);
    }
};

let Kecheng = db.model('Kecheng', kechengSchema);

// Kecheng.create({
//     kid: '1000',
//     name: '语文课'
// })
// Kecheng.create({
//     kid: '1001',
//     name: '数学课'
// })
// Kecheng.create({
//     kid: '1002',
//     name: '英语课'
// })
// Kecheng.create({
//     kid: '1003',
//     name: '体育课'
// })
// Kecheng.create({
//     kid: '1004',
//     name: '音乐课'
// })
// Kecheng.create({
//     kid: '1005',
//     name: '美术课'
// })
// Kecheng.create({
//     kid: '1006',
//     name: '政治课'
// })
// Kecheng.create({
//     kid: '1007',
//     name: '地理课'
// })
// Kecheng.create({
//     kid: '1008',
//     name: '历史课'
// })

module.exports = Kecheng;