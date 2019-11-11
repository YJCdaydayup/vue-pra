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

kechengSchema.statics.getAllKecheng = function (callback) {
    let names = [];
    this.model('Kecheng').find({}, (err, kechengs)=> {
        if (err) {
            throw err;
        }
        for (let i = 0; i < kechengs.length; i++) {
          names.push(kechengs[i].name);
        }
        callback(names);
    });
};

kechengSchema.statics.tianjiaxuesheng = function (kids, sid, callback) {
    let me = this;
    (function iterator(i) {
        let kid = kids[i];
        console.log(kids);
        me.model('Kecheng').findOne({kid}, (err, kecheng)=> {
            if (i === kids.length) {
                callback();
                return;
            }
            let {students} = kecheng;
            students.push(sid);
            kecheng.save(()=> {
                iterator(i + 1);
            })
        });
    })(0)
};

kechengSchema.statics.deleteStudents = function (sid, callback) {
    this.model('Kecheng').find({}, (err, kechengs)=> {
        (function iterator(i) {
            let kecheng = kechengs[i];
            if (i === kechengs.length) {
                callback();
                return;
            }
            kecheng.deleteStudent(sid, function (err, result) {
                if (err) {
                    throw err;
                }
                iterator(i + 1);
            });
        })(0)
    });
};

kechengSchema.methods.deleteStudent = function (sid, callback) {
    let index = this.students.indexOf(sid);
    if (index > -1) {
        this.students.splice(index, 1);
        this.save(callback)
    } else {
        callback()
    }
}

// 索引
kechengSchema.index({kid: 1});

let Kecheng = db.model('Kecheng', kechengSchema);

module.exports = Kecheng;

