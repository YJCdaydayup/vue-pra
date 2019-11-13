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
    console.log(req.query);
    Student.getAllSids((sids) => {
        if (sids.indexOf(req.query.sid) > -1) {
            res.send('此学生已经存在，不能重复创建');
            return;
        }
        Student.create(req.query, (err, result) => {
            if (err) {
                throw err;
            }
            Kecheng.addStudent(req.query, () => {
                console.log('完成了吗')
                res.redirect('/');
            })
        });
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
    let {sid} = req.params;
    Student.deleteOne({sid}, (err, result) => {
        console.log(sid)
        console.log(result)
        console.log(123456)
        if (err) {
            throw err;
        }
        Kecheng.deleteStudent(sid, function () {
            res.redirect('/');
        });
    });
};

exports.showEdit = (req, res) => {
    Kecheng.find({}, (err, kechengs) => {
        Student.findOne({sid: req.params.sid}, (err, student) => {
            res.render('edit', {
                student,
                kechengs
            })
        });
    });
};

exports.doEdit = (req, res) => {
    let {sid} = req.params;
    Student.updateOne({sid}, req.query, (err, result) => {
        if (err) {
            throw err;
        }
        Kecheng.editKecheng(sid, req.query.kechengs, () => {
           res.redirect('/');
        });
    });
};