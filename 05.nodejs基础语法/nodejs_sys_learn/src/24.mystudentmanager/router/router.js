const Student = require('./../models/Student');
const Kecheng = require('./../models/Kecheng');

/**
 * 展示新增页面
 * @param req
 * @param res
 */
exports.showAdd = (req, res) => {
    Kecheng.find({}, (err, kechengs) => {
        res.render('add.ejs', {
            kechengs
        })
    });
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
        Kecheng.addStudent(req.query.sid, (err, result) => {
            if (err) {
                throw err;
            }
            res.redirect('/');
        })
    });
};

exports.showStudents = (req, res) => {
    Student.find({}, (err, students) => {
        Kecheng.getAllKecheng((kechengkvs) => {
            res.render('students', {
                students,
                kechengkvs
            })
        })
    });
};

exports.deleteStudent = (req, res) => {

};