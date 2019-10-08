/**
 * Created by yangli on 2019/9/29.
 */


'use strict'
const express = require('express');
const db = require('./model/db');

let app = express();

// 增加
app.get('/insertOne', (req, res, next) => {
    db.insertOne('teacher', {
        name: 'Sara',
        age: parseInt(Math.random() * 100 + 10)
    }, (err, result) => {
        if (err) {
            next()
            return;
        }
        res.send('插入成功');
    })
});

app.get('/insertMany', (req, res, next) => {
    db.insertMany('teacher', [{name: 'pipi', sex: '男'}, {name: 'gogo', favorate: '🏀'}], (err, result) => {
        if (err) {
            next();
            return;
        }
        res.send(result);
    })
})

// 查询
app.get('/find', (req, res, next) => {
    let {page} = req.query;
    page = parseInt(page);
    if (page < 0) {
        res.send({
            status: 1,
            msg: '参数错误'
        });
        return;
    }
    db.find('teacher', {}, (err, result) => {
        if (err) {
            next();
            return;
        }
        let data = [];
        let count = Math.ceil(result.length / 10);
        console.log(count)
        if (page >= count) {
            res.send({
                status: 0,
                msg: '找不到更多数据了'
            })
            return;
        }
        for (let i = 10 * page; i < 10 * (page + 1); i++) {
            if (result[i]) {
                data.push(result[i]);
            }
        }
        // res.send(data);
        res.json({
            result: data
        })
    })
});

app.get('/findOne', (req, res, next) => {
    db.findOne('teacher', {age: {$gt: 20}}, function (err, result) {
        if (err) {
            next();
            return;
        }
        res.send(result);
    })
})

// 删除
app.get('/deleteOne', (req, res, next) => {
    db.deleteOne('teacher', {}, function (err, result) {
        if (err) {
            next();
            return;
        }
        res.send(result);
    })
});

app.get('/deleteMany', (req, res, next) => {
    db.deleteMany('teacher', {age: {$gte: 30}}, function (err, result) {
        if (err) {
            next();
            return;
        }
        res.send(result);
    })
})

// 改
app.get('/update/set', (req, res, next) => {
    db.set('teacher', {name: /S/gi}, {$set: {sex: '女'}}, (err, result) => {
        if (err) {
            next();
            return;
        }
        res.send(result);
    })
})

app.get('/update/push', (req, res, next) => {
    let arr = ['中国', '美国', '德国'];
    db.push('teacher', {}, {$push: {'info.counties': arr}}, function (err, result) {
        if (err) {
            next();
            return;
        }
        res.send(result);
    });
});

// 分页 limit skip配合使用进行分页
app.get('/du', (req, res, next)=> {
    let page = parseInt(req.query.page);
    let pageSize = parseInt(req.query.pageSize);
    console.log(pageSize,page);
    db.du('teacher', {}, {
        page: page,
        pageSize: pageSize
    }, function (err, data) {
        if (err) {
            next();
            return ;
        }
        res.json({
            result: data
        })
    })
});

app.use((req, res, next) => {
    res.send('404错误');
})

app.listen(3000);