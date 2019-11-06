'use strict'

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/xuanke');

let db = mongoose.connection;

db.once('open', (err)=> {
    console.log('数据库连接成功');
});


// 学生
let studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    sex: String
})

studentSchema.methods.zhangyisui = function (callback) {
    this.age++;
    this.save(callback);
}

let Student = mongoose.model('Student', studentSchema);

// 课程
let kechengSchema = new mongoose.Schema({
    name: String,
    info: String,
    students: [studentSchema]
});

kechengSchema.methods.tianjiaxuesheng = function (studentObj, callback) {
    this.students.push(studentObj);
    this.save(callback);
}

kechengSchema.methods.zhaoxuesheng = function (num, callback) {
    this.students[num].age ++;
    this.save(()=>{
        Student.findOne({name: this.students[num].name}, (err, student)=>{
            student.zhangyisui(callback);
        });
    });
};

let Kecheng = mongoose.model('Kecheng', kechengSchema);

// let xm = new Student({
//     name: '小明',
//     age: 12,
//     sex: '男'
// });
//
// let kecheng = new Kecheng({
//     name: '数学课',
//     info: '学数学的学生们'
// });

Kecheng.findOne({name: '数学课'}, (err, kecheng)=> {
   kecheng.zhaoxuesheng(0,function (err, result) {
       console.log('都长了一岁哦！！！')
   })
});


