/**
 * Created by yangli on 2019/10/29.
 */

let Student = require('./models/Student');

let xm = new Student({
    name: '小猫',
    age: 3,
    sex: 'female'
});

xm.save((err)=> {
    console.log('小猫存储了');
});

// Student.create({
//     name: '小狗',
//     age: 18,
//     sex: '女'
// });
//
// Student.zhaoren('小狗', (err, result)=> {
//     console.log(result);
// });

Student.xiugai({name: '小狗'},{$set: {
    age: 30
}},{},(err,result)=>{

})