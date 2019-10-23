/**
 * Created by yangli on 2019/10/17.
 */

const formidable = require('formidable');
const db = require('./../models/db');
const md5 = require('./../models/md5');
const fs = require('fs');
const gm = require('gm')

/**
 * 首页
 * @param req
 * @param res
 */
exports.showIndex = (req, res)=> {
    if (req.session.login == 1) {
        db.find('users', {
            username: req.session.username
        }, (err, result)=> {
            "use strict";
            console.log(result[0].avatar)
            res.render('index', {
                login: req.session.login == '1',
                username: req.session.login == '1' ? req.session.username : '',
                flag: '首页',
                avatar: result[0].avatar || "moren.jpg"
            });
        })
    } else {
        res.render('index', {
            login: req.session.login == '1',
            username: req.session.login == '1' ? req.session.username : '',
            flag: '首页',
            avatar: "moren.jpg"
        });
    }
};

/**
 * 注册页面
 * @param req
 * @param res
 */
exports.showRegist = (req, res)=> {
    res.render('regist', {
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
                password: md5(password),
                avatar: 'moren.jpg'
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
    res.render('login', {
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
};

/**
 * 设置头像
 * @param req
 * @param res
 */
exports.setavatar = (req, res)=> {
    if (req.session.login !== 1) {
        res.send('非法闯入，必须登录')
    } else {
        res.render('setavatar', {
            login: true,
            username: req.session.login == '1' ? req.session.username : '',
            flag: '设置'
        })
    }
};

/**
 * 提交新的头像
 * @param req
 * @param res
 */
exports.dosetavatar = (req, res)=> {
    let form = new formidable.IncomingForm();
    form.uploadDir = './avatar';
    form.parse(req, (err, fields, files)=> {
        console.log(files);
        // let extname = fs.extname(files.touxiang.name);
        let oldname = files.touxiang.path;
        let newname = './avatar/' + files.touxiang.name;
        fs.rename(oldname, newname, (err)=> {
            if (!err) {
                req.session.avatar = files.touxiang.name;
                res.redirect(301, '/cut');
            }
        })
    })
};

/**
 * 展示头像切割页面
 * @param req
 * @param res
 */
exports.showcut = (req, res)=> {
    res.render('cut', {
        avatar: req.session.avatar
    })
};

exports.docut = (req, res)=> {
//这个页面接收几个GET请求参数
    //文件名、w、h、x、y
    var filename = req.query.filename;
    var w = req.query.w;
    var h = req.query.h;
    var x = req.query.x;
    var y = req.query.y;
    gm("./avatar/" + req.session.avatar)
        .crop(w,h,x,y)
        .resize(100,100,"!")
        .write("./avatar/" + req.session.avatar,function(err){
            if(err){
                res.send("-1");
                return;
            }
            db.set('users',{
                username: req.session.username
            },{
                $set: {
                    avatar: req.session.avatar
                }
            },(err, result)=>{
                if (!err) {
                    res.send('1');
                }
            })
        });
};