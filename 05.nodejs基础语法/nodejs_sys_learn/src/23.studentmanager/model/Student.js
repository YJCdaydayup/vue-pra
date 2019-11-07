/**
 * Created by yangli on 2019/11/6.
 */

const mongoose = require('mongoose');
const db = require('./db');

let studentSchema = new mongoose.Schema({
    sid: Number,
    name: String,
    age: Number,
    sex: String,
    kechengs: [Number] // 存放课程的kid
});

studentSchema.statics.lieshu = function (callback) {
    this.model('Student').find({}, callback)
};

// 索引
studentSchema.index({sid: 1});

let Student = db.model('Student', studentSchema);

module.exports = Student;

