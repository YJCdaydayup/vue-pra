var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/runoob1"

MongoClient.connect(url,{useNewUrlParser: true}, function (err, db) {
    if (!err) {
        console.log('数据库已创建')
        db.close();
    }
})