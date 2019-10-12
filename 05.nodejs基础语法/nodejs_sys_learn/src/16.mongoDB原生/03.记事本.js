/**
 * Created by yangli on 2019/10/8.
 */

'use strict'

const express = require('express');
const ejs = require('ejs')
const formidable = require('formidable');
const util = require('util');
const db = require('./model/db');
const ObjectId = require('mongodb').ObjectId;

let app = express();

app.set('view engine', 'ejs');
app.use(express.static('./public'));

app.get('/', (req, res, next)=> {
    db.getAllCount('liuyanben', (err, count)=> {
        if (err) {
            next();
            return;
        }
        res.render('index', {
            count: Math.ceil(count / 10)
        })
    })
});

app.post('/tijiao', (req, res, next)=> {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        db.insertOne('liuyanben', {
            xingming: fields.name,
            liuyan: fields.liuyan,
            shijian: fields.shijian
        }, (err, result)=> {
            if (err) {
                res.json({
                    status: 1,
                    msg: '提交失败'
                })
                return;
            }
            res.json({
                status: 0,
                msg: '提交成功'
            })
        })
    });
});

app.get('/du', (req, res, next)=> {
    let page = req.query.page;
    let pageSize = req.query.pageSize;
    console.log('123: ', pageSize)
    db.du('liuyanben', {}, {sort: {shijian: -1}, page: page, pageSize: pageSize}, (err, result)=> {
        if (err) {
            res.json({
                status: 1,
                msg: '获取数据失败'
            })
            return;
        }
        res.json({
            status: 0,
            result: result
        });
    })
});

app.get('/getAllCount', (req, res, next)=> {
    db.getAllCount('liuyanben', (err, count)=> {
        if (err) {
            res.json({
                status: 1,
                msg: '请求数据失败'
            })
            return;
        }
        res.json({
            status: 0,
            count: count
        })
    })
});

app.get('/delete', (req, res, next)=> {
    let id = req.query.id;
    console.log( {_id: ObjectId(id)});
    db.delete('liuyanban', {"_id": ObjectId(id)}, (err, result)=> {
        if (err) {
            res.json({
                status: 1,
                msg: '请求数据失败'
            })
            return;
        }
        res.json({
            status: 0,
            count: result
        })
    })
});

app.use((req, res)=> {
    console.log(req.url)
    res.send('404');
});

app.listen(3000);