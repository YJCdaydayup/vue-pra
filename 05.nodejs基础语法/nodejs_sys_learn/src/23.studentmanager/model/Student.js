/**
 * Created by yangli on 2019/11/6.
 */

const mongoose = require('mongoose');
const db = require('./db');

let studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    sex: String
});

studentSchema.statics.lieshu = function (callback) {
    this.model('Student').find({}, callback)
}

let Student = db.model('Student', studentSchema);

module.exports = Student;

