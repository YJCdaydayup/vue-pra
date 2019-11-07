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

exports.showIndex = (req, res)=> {
    Kecheng.find({}, (err, kechengs)=> {

        Student.find({}, (err, students)=> {
            if (err) {
                throw err;
            }
            res.render('students', {
                students,
                kechengs
            })
        });
    })
};

exports.showadd = (req, res)=> {
    Kecheng.find({}, (err, quanbukecheng)=> {
        res.render('add', {
            quanbukecheng
        })
    });
};

exports.doadd = (req, res)=> {
    console.log(req.query);
    Student.create(req.query, function (err, result) {
        Kecheng.tianjiaxuesheng(req.query.kechengs, req.query.sid, function (err, result) {
            res.redirect('/')
        });
    })
};

exports.edit = (req, res)=> {
    let {sid} = req.params;
    Student.findOne({sid}, (err, student)=> {
        res.render('edit', {
            student
        })
    })
};

exports.doedit = (req, res)=> {
    console.log(req.query)
    Student.updateOne({sid: req.params.sid}, req.query, (err, result)=> {
        res.redirect('/')
    });
};
