'use strict'

const express = require('express');
const MongoClient = require('mongodb').MongoClient;

let app = express();

app.get('/', (req, res)=> {
    let url = 'mongodb://127.0.0.1:27017/haha';
    // 连接数据库
    MongoClient.connect(url, (err, client)=> {
        if (err) {
            throw err;
        }
        var db = client.db('haha')
        console.log('连接数据库成功');
        let collection = db.collection('site');
        collection.insertOne({
            name: 'Sara',
            age: parseInt(Math.random() * 100 - 20)
        }, (err, result)=> {
            if (err) {
                throw err;
            }
            db.close();
            res.write(JSON.stringify(result))
            res.end('插入数据成功');
        })
    })
})
app.listen(3000);