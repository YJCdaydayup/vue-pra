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
exports.showIndex = (req, res) => {
    let username, avatar;
    if (req.session.login == 1) {
        username = req.session.username;
    }
    db.multiFind('posts', {}, {
        sort: {
            datetime: -1
        }
    }, (err, results) => {
        if (err) {
            throw err;
        }
        db.find('users', {
            username: req.session.username
        }, (err, result) => {
            if (result.length == 0) {
                avatar = 'moren.jpg';
            } else {
                avatar = result[0].avatar;
            }
            res.render('index', {
                login: req.session.login == '1',
                username: req.session.login == '1' ? req.session.username : '',
                flag: '首页',
                avatar,
                shuoshuo: results
            });
        })
    });
};

/**
 * 注册页面
 * @param req
 * @param res
 */
exports.showRegist = (req, res) => {
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
exports.doregist = (req, res) => {
    let form = new formidable.IncomingForm();
    form.parse(req, (err, fields, files) => {
        console.log(fields)
        let {username, password} = fields;
        db.find('users', {
            username
        }, (err, result) => {
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
            }, (err, result) => {
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
exports.showlogin = (req, res) => {
    res.render('login', {
        login: req.session.login == '1',
        username: req.session.login == '1' ? req.session.username : '',
        flag: '登录'
    })
};

exports.dologin = (req, res) => {
    let form = new formidable.IncomingForm();
    form.parse(req, (err, fields, files) => {
        let {username, password} = fields;
        db.find('users', {
            username
        }, (err, result) => {
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
            req.session.avatar = result[0].avatar;
            res.send('1');
        })
    });
};

/**
 * 设置头像
 * @param req
 * @param res
 */
exports.setavatar = (req, res) => {
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
exports.dosetavatar = (req, res) => {
    let form = new formidable.IncomingForm();
    form.uploadDir = './avatar';
    form.parse(req, (err, fields, files) => {
        console.log(files);
        // let extname = fs.extname(files.touxiang.name);
        let oldname = files.touxiang.path;
        let newname = './avatar/' + files.touxiang.name;
        fs.rename(oldname, newname, (err) => {
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
exports.showcut = (req, res) => {
    res.render('cut', {
        avatar: req.session.avatar
    })
};

exports.docut = (req, res) => {
//这个页面接收几个GET请求参数
    //文件名、w、h、x、y
    var filename = req.query.filename;
    var w = req.query.w;
    var h = req.query.h;
    var x = req.query.x;
    var y = req.query.y;
    gm("./avatar/" + req.session.avatar)
        .crop(w, h, x, y)
        .resize(100, 100, "!")
        .write("./avatar/" + req.session.avatar, function (err) {
            if (err) {
                res.send("-1");
                return;
            }
            db.set('users', {
                username: req.session.username
            }, {
                $set: {
                    avatar: req.session.avatar
                }
            }, (err, result) => {
                if (!err) {
                    // 更新所有此姓名的评论集合中的avatar
                    db.set('posts', {
                        username: req.session.username
                    }, {
                        $set: {
                            avatar: req.session.avatar
                        }
                    }, (err, res1) => {
                        if (!err) {
                            res.send('1');
                        }
                    })
                }
            })
        });
};

/**
 * 发表说说
 * @param req
 * @param res
 */
exports.dopost = (req, res) => {
    if (req.session.login !== 1) {
        res.send('非法闯入，需要先登录');
        return;
    }
    let form = new formidable.IncomingForm();
    form.parse(req, (err, fields, files) => {
        if (err) {
            res.send("-1");
            return;
        }
        let {content} = fields;
        let username = req.session.username;
        console.log(content)
        db.insertOne('posts', {
            username,
            content,
            datetime: new Date(),
            avatar: req.session.avatar
        }, (err, result) => {
            if (err) {
                res.send("-3");
                return;
            }
            res.send('1'); // 写入了另外一个表posts成功
        })
    })
};

/**
 * 获取某个人的所有说说
 * @param req
 * @param res
 */
exports.showusershuoshuo = (req, res) => {
    if (!req.session.login) {
        res.send('非法闯入，您需要先登录！');
        return;
    }
    let {username} = req.params;
    db.multiFind('posts', {
        username
    }, {
        sort: {
            datetime: -1
        }
    }, (err, result) => {
        if (err) {
            res.send("-3");
            return;
        }
        console.log(this);
        res.render('personss', {
            login: req.session.login == '1',
            username: username,
            shuoshuo: result,
            flag: '首页',
        })
    })
};

exports.existlogin = (req, res) => {
    if (req.session.login !== 1) {
        // 本来就未登录
        res.redirect('/');
    } else {
        // 已经登录
        req.session.login = null;
        req.session.username = null;
        req.session.avatar = null;
        res.redirect('/')
    }
};

/**
 * 获取数据页码
 */
exports.getAllPages = (req, res) => {
    let {username} = req.query;
    db.getAllCount('posts', {
        username
    }, (err, count) => {
        if (err) {
            res.send("-3");
            return;
        }
        res.send(count + '');
    });
};

/**
 * 获取某个用户的所有说说
 * @param req
 * @param res
 */
exports.getList = (req, res) => {
    let {username, pagesize, page} = req.query;
    console.log(req.query)
    db.multiFind('posts', {
        username
    }, {
        page,
        pageSize: pagesize,
        sort: {
            datetime: -1
        }
    }, (err, result) => {
        if (err) {
            res.send('-3');
            return;
        }
        res.json({
            res: result
        })
    })
};

exports.showusers = (req, res) => {
    db.find('users', {}, (err, result) => {
        res.render('user', {
            users: result
        });
    })
};