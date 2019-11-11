const mongoose = require('mongoose');
const db = require('./db');

let studentSchema = new mongoose.Schema({
    sid: String,
    name: String,
    age: Number,
    sex: String,
    kechengs: [String]
});

let Student = db.model('Student',studentSchema);

module.exports = Student;