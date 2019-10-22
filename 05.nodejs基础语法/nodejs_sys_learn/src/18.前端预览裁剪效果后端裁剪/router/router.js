const gm = require('gm');
const db = require('./../models/db');
const formidable = require('formidable');

exports.showIndex = (req, res) => {
    res.render('index');
};

exports.docut = (req, res) => {
    let {x, y, w, h} = req.query;
    gm('./touxiang/bb.jpg')
        .crop(x, y, w, h)
        .resize(240, 240 * 135 / 110, '!')
        .write('./touxiang/' + parseInt(Math.random() * 10000) + 'resize.png', function (err) {
            if (err) {
                throw err;
            }
            res.send('done');
        });
};

exports.insertUserInfo = (req, res) => {
    let {name, age, favor} = req.query;
    db.insertUserInfo('friends', {
        name,
        age,
        favor
    }, (err, result) => {
        console.log(result);
    });
};

exports.saveImage = (req, res) => {
    let form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        console.log(files);
    });
};

exports.upload = (req, res) => {
    res.render('upload');
};
