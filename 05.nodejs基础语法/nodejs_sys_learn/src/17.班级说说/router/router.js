/**
 * Created by yangli on 2019/10/17.
 */

const formidable = require('formidable');
const db = require('./../models/db');
const md5 = require('./../models/md5');

/**
 * 首页
 * @param req
 * @param res
 */
exports.showIndex = (req, res)=> {
    res.render('index', {
        login: req.session.login == '1',
        username: req.session.login == '1' ? req.session.username : '',
        flag: '首页'
    });
};

/**
 * 注册页面
 * @param req
 * @param res
 */
exports.showRegist = (req, res)=> {
    res.render('regist',{
        login: req.session.login == '1',
        username: req.session.login == '1' ? req.session.username : '',
        flag: '注册'
    });
};

/**
 * 注册
 * @param req
 * @param res
 */
exports.doregist = (req, res)=> {
    let form = new formidable.IncomingForm();
    form.parse(req, (err, fields, files)=> {
        console.log(fields)
        let {username, password} = fields;
        db.find('users', {
            username
        }, (err, result)=> {
            if (err) {
                res.send('-3');
                return;
            }
            if (result.length !== 0) {
                res.send('-1');
                return;
            }
            db.insertOne('users', {
                username,
                password: md5(password)
            }, (err, result)=> {
                if (err) {
                    res.send('-3');
                    return;
                }
                req.session.login = 1;
                req.session.username = username;
                res.send('1');
            })
        })
    });
};

/**
 * 登录页面
 * @param req
 * @param res
 */
exports.showlogin = (req, res)=> {
    res.render('login',{
        login: req.session.login == '1',
        username: req.session.login == '1' ? req.session.username : '',
        flag: '登录'
    })
};

exports.dologin = (req, res)=> {
    let form = new formidable.IncomingForm();
    form.parse(req, (err, fields, files)=> {
        let {username, password} = fields;
        db.find('users', {
            username
        }, (err, result)=> {
            if (err) {
                res.send('-3');
                return;
            }
            if (result.length === 0) {
                res.send('-1');
                return;
            }
            if (result[0].password != md5(password)) {
                res.send('-2');
            }

            req.session.login = 1;
            req.session.username = username;
            res.send('1');
        })
    });
}