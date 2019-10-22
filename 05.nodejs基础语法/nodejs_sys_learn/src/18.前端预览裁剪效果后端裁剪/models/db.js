const MongoClient = require('mongodb').MongoClient;
const setiing = require('./../config/setting');

__connectMongoDB = (callback) => {
    MongoClient.connect(setiing.DBURL, (err, client) => {
        console.log('连接数据库成功');
        let db = client.db('yangJC');
        callback(err, db);
    })
};

exports.insertUserInfo = (collectionName, json, callback) => {
    __connectMongoDB((err, db) => {
        if (err) {
            callback(err);
            return;
        }
        let collection = db.collection(collectionName);
        collection.insertOne(json,function (err,result) {
            if (err) {
                callback(err);
                return;
            }
            console.log(JSON.stringify(result));
        })
    })
};

exports.saveImage = () => {

}
