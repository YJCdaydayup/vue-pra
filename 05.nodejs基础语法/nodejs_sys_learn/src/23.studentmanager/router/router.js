/**
 * Created by yangli on 2019/11/6.
 */

const Student = require('./../model/Student');

exports.showIndex = (req, res)=> {
    Student.find({}, (err, students)=> {
        if (err) {
            throw err;
        }
        res.render('students', {
            students
        })
    });
};

exports.showadd = (req, res)=> {
    res.render('add')
};

exports.doadd = (req, res)=> {
    console.log(req.query);
    Student.create(req.query, function (err, result) {
        res.redirect('/')
    })
};
