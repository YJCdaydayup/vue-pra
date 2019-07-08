var MongoClent = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/runoob1'

MongoClent.connect(url, {useNewUrlParser: true},function (err, db) {
    if (!err) {
        console.log('创建集合');
        db.close();
    }
})