/**
 * Created by yangli on 2019/10/29.
 */
const mongoose = require('mongoose');
const db = require('./db');

let studentSchema = new mongoose.Schema({
    name: {type: String, default: '匿名用户'},
    age: {type: Number},
    sex: {type: String}
});

studentSchema.statics.zhaoren = function (name, callback) {
    // this.model('Student')就是拿到这个集合或者类
    this.model('Student').find({
        name
    }, callback);
};

studentSchema.statics.xiugai = function (conditions, update, options, callback) {
    this.model('Student').updateMany(conditions, update, options, callback);
};

// 创建这个类或者集合
let StudentModel = db.model('Student', studentSchema);

module.exports = StudentModel;