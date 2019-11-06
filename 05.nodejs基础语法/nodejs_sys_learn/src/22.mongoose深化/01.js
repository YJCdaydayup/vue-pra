'use strict'

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/jj');

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

studentSchema.methods.zhangyisui = function () {
    this.age ++;
    this.save();
}

let Student = mongoose.model('Student',studentSchema);

// 课程
let kechengSchema = new mongoose.Schema({
    name: String,
    info: String,
    students: [studentSchema]
});

kechengSchema.methods.tianjiaxuesheng = function (studentObj,callback) {
    this.students.push(studentObj);
    this.save(callback);
}

let kecheng = mongoose.model('Kecheng',kechengSchema);

kecheng.findOne({},(err, kecheng)=>{
    kecheng.students[0].zhangyisui();
    kecheng.save();
})

// let shuxueke = new kecheng({
//     name: '数学',
//     info: '学数学的'
// });
//
// let stu = new Student({
//     name: '小强',
//     sex: '男',
//     age: 18
// })
//
// shuxueke.tianjiaxuesheng(stu,function () {
//    console.log('添加学生成功')
// });

// 实例化几个学生
// let xm = Student.create({
    // name: '小明',
    // age: 12,
//     sex: '男'
// });
//
// let xh = Student.create({
//     name: '小红',
//     age: 12,
//     sex: '男'
// });
//
// let xq = Student.create({
//     name: '小青',
//     age: 12,
//     sex: '男'
// });
//
// let xqiang = Student.create({
//     name: '小强',
//     age: 12,
//     sex: '男'
// });

