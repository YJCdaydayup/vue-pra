const mongoose = require('mongoose');
const db = require('./db');

let studentSchema = new mongoose.Schema({
    sid: String,
    name: String,
    age: Number,
    sex: String,
    kechengs: [String]
});

studentSchema.statics.getAllSids = function (callback) {
    let sids = [];
    Student.find({}, {_id: 0, sid: 1}, (err, students) => {
        if (err) {
            throw err;
        }
        for (let i = 0; i < students.length; i++) {
            sids.push(students[i].sid);
        }
        callback = callback || function () {
        }
        callback(sids);
    });
};

let Student = db.model('Student', studentSchema);

module.exports = Student;