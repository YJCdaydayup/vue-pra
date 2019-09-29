/**
 * Created by yangli on 2019/9/29.
 */

const MongoClient = require('mongodb').MongoClient;

// 不管数据库的什么操作都要先连接数据库，可以把这个封装
// 加下划线表示内部函数
function _connectDB(callback) {
    let url = 'mongodb://127.0.0.1:27017/';
    MongoClient.connect(url, (err, client)=> {
        // if (err) {
        // throw err;
        // }
        console.log('连接数据库成功');
        var db = client.db('haha');
        // let collection = db.collection('site');
        callback(err, db);
    })
};

// 插入一个数据
exports.insertOne = function (collectionName, json, callback) {
    _connectDB(function (err, db) {
        let collection = db.collection(collectionName);
        // 原先的回调要写出来
        collection.insertOne(json, function (err, result) {
            callback(err, result);
            MongoClient.close();
        });
    });
};

// 查找数据
exports.find = function (collectionName, json, callback) {
    if (arguments.length != 3) {
        callback('find函数接受3个参数，参数错误');
        return;
    }
    let result = [];
    json = json || {};
    _connectDB(function (err, db) {
        let collection = db.collection(collectionName);
        let cursor = collection.find(json);
        console.log(cursor.count);
        cursor.toArray((err, item)=> {
            if (err) {
                callback(err);
                return ;
            }
            console.log(item);
        })
        // console.log(cursor.constructor);
        // cursor.forEach(function (err, doc) {
        //
        // })
    })
};

