/**
 * Created by yangli on 2019/11/6.
 */

const mongoose = require('mongoose');
const db = require('./db');

let kechengSchema = new mongoose.Schema({
    kid: Number,
    name: String,
    students: [Number] // 存放的是学生的sid
});

kechengSchema.statics.tianjiaxuesheng = (kids, sid, callback)=> {
    for (let i = 0; i < kids.length; i++) {
        let kid = kids[i];
        this.model('Kecheng').find({kid}, (err, kecheng)=> {
            kecheng.students.push(sid);
            kecheng.save(callback);
        });
    }
    ;
};

// 索引
kechengSchema.index({kid: 1});

let Kecheng = db.model('Kecheng', kechengSchema);

module.exports = Kecheng;

