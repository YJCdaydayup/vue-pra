const Student = require('./../models/Student');
const Kecheng = require('./../models/Kecheng');

/**
 * 展示新增页面
 * @param req
 * @param res
 */
exports.showAdd = (req, res) => {
    res.render('add.ejs')
};

/**
 * 添加新学生
 * @param req
 * @param res
 */
exports.doAdd = (req, res) => {
    Student.create(req.query, (err, result) => {
        if (err) {
            throw err;
        }
        res.send('插入数据成功');
    });
};

exports.showStudents = (req, res) => {
    Student.find({}, (err, students) => {
       Kecheng.getAllKecheng((kechengkvs)=>{
           console.log(kechengkvs);
           res.render('students',{
               students,
               kechengkvs
           })
       })
    });
};