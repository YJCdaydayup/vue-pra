var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

// 这一个方法可以创建数据库，创建表，插入数据了
MongoClient.connect(url, {useNewUrlParser: true},function (err, db) {
    if (err) throw err;
    var dbo = db.db("runoob2");
    var myobj = { name: "菜鸟教程", url: "www.runoob1" };
    dbo.collection("site").insert(myobj, function(err, res) {
        if (err) throw err;
        console.log("文档插入成功");
        db.close();
    });
})