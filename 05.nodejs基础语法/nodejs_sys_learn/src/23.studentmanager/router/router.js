/**
 * Created by yangli on 2019/11/6.
 */

const Student = require('./../model/Student');
const Kecheng = require('./../model/Kecheng');

// Kecheng.create({
//     kid: '100',
//     name: '美术课'
// });
// Kecheng.create({
//     kid: '101',
//     name: '音乐课'
// });
// Kecheng.create({
//     kid: '102',
//     name: '体育课'
// });

exports.showIndex = (req, res) => {
    Kecheng.getKechengsObj((kvs) => {
        Student.find({}, (err, students) => {
            if (err) {
                throw err;
            }
            res.render('students', {
                students,
                kvs
            })
        });
    })
};

exports.showadd = (req, res) => {
    Kecheng.find({}, (err, quanbukecheng) => {
        res.render('add', {
            quanbukecheng
        })
    });
};

exports.doadd = (req, res) => {
    let kids;
    if (req.query.kechengs.constructor.name !== 'Array') {
        kids = [];
        kids.push(req.query.kechengs);
    } else {
        kids = req.query.kechengs;
    }
    Student.findOne({sid: req.query.sid}, (err, student) => {
        if (err) {
            throw err;
        }
        if (student) {
            res.send('此学生已经存在');
            return;
        }
        Student.create(req.query, function (err, result) {
            if (err) {
                throw err;
            }
            Kecheng.tianjiaxuesheng(kids, req.query.sid, function () {
                res.redirect('/')
            });
        })
    });
};

exports.edit = (req, res) => {
    let {sid} = req.params;
    Kecheng.find({}, (err, kechengsObjs) => {
        Student.findOne({sid}, (err, student) => {
            Kecheng.getAllKecheng((kechengs) => {
                res.render('edit', {
                    student,
                    kechengs,
                    kechengsObjs
                })
            })
        })
    })
};

exports.doedit = (req, res) => {
    console.log(req.query)
    console.log(req.params.sid);
    Student.updateOne({sid: req.params.sid}, req.query, (err, result) => {
        if (err) {
            throw err;
        }
        res.redirect('/')
    });
};

exports.deleteStudent = (req, res) => {
    let {sid} = req.params;
    Student.deleteOne({sid}, (err, result) => {
        if (err) {
            throw err;
        }
        Kecheng.deleteStudents(sid, (err1) => {
            if (err1) {
                throw err1;
            }
            res.redirect('/')
        });
    })
};
