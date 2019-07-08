var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, {useNewUrlParser: true}, function (err, db) {
    if (!err) {
        var dbs = db.db('runoob1');
        dbs.collection('site').find({}).toArray(function (err, res) {
            if (!err) {
                console.log(res);
                db.close();
            }
        })
    }
})