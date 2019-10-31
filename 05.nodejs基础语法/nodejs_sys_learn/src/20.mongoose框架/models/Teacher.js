const mongoose = require('mongoose');
const db = require('./db');

let teacherSchema = new mongoose.Schema({
    name: {
        type: String,
        default: '匿名Teacher'
    },
    age: {
        type: Number
    },
    sex: {
        type: String
    }
});

teacherSchema.statics.finds = function (conditions,query,callback) {
    this.model('Teacher').find(conditions, query,(err, result) => {
        if (err) {
            throw err;
        }
        callback(result);
    });
};

let Teacher = db.model('Teacher', teacherSchema);

module.exports = Teacher;

