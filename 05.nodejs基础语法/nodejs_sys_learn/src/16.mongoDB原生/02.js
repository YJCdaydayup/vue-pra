/**
 * Created by yangli on 2019/9/29.
 */


'use strict'
const express = require('express');
const db = require('./model/db');

let app = express();

app.get('/', (req, res)=> {
    db.insertOne('teacher', {
        name: 'Sara',
        age: parseInt(Math.random() * 100 + 10)
    }, (err, result)=> {
        if (err) {
            throw err;
        }
        res.send('插入成功');
    })
});

app.get('/find', (req, res)=> {
    db.find('teacher',{},(err,result)=>{

    })
})

app.listen(3000);