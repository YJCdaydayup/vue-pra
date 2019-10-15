/**
 * Created by yangli on 2019/9/29.
 */

const MongoClient = require('mongodb').MongoClient;
const settings = require('./../setting');

// 不管数据库的什么操作都要先连接数据库，可以把这个封装
// 加下划线表示内部函数
function _connectDB(callback) {
    MongoClient.connect(settings.dburl, (err, client) => {
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
        });
    });
};

exports.insertMany = function (collectionName, arr, callback) {
    _connectDB((err, db) => {
        if (err) {
            callback(err);
            return;
        }
        let collection = db.collection(collectionName);
        collection.insertMany(arr, (err, res) => {
            if (err) {
                callback(err);
                return;
            }
            callback(null, res);
        });
    })
}

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
        cursor.toArray((err, item) => {
            if (err) {
                callback(err);
                return;
            }
            if (item.length === 0) {
                callback(null, result);
                return ;
            }
            item.forEach((itm) => {
                result.push(itm);
                if (result.length === item.length) {
                    callback(null, result);
                }
            })
        });
    })
};

exports.findOne = function (collectionName, json, callback) {
    if (arguments.length != 3) {
        callback('find函数接受3个参数，参数错误');
        return;
    }
    json = json || {};
    _connectDB((err, db) => {
        if (err) {
            callback(err);
            return;
        }
        let collection = db.collection(collectionName);
        let cursor = collection.findOne(json);
        cursor.then((res) => {
            callback(null, res);
        })
    })
};

exports.deleteOne = function (collectionName, json, callback) {
    _connectDB((err, db) => {
        if (err) {
            callback(err);
            return;
        }
        let collection = db.collection(collectionName);
        collection.deleteOne(json, (err, result) => {
            if (err) {
                callback(err);
                return;
            }
            callback(null, result);
        })
    });
}


exports.deleteMany = function (collectionName, json, callback) {
    _connectDB((err, db) => {
        if (err) {
            callback(err);
            return;
        }
        let collection = db.collection(collectionName);
        collection.deleteMany(json, (err, result) => {
            if (err) {
                callback(err);
                return;
            }
            callback(null, result);
        })
    });
};

exports.set = function (collectionName, json, rule, callback) {
    _connectDB((err, db) => {
        if (err) {
            callback(err);
            return;
        }
        let collection = db.collection(collectionName);
        collection.updateMany(json, rule, (err, result) => {
            if (err) {
                callback(err);
                return;
            }
            callback(null, result);
        })
    })
};

exports.push = function (collectionName, json, rule, callback) {
    console.log(rule)
    _connectDB((err, db) => {
        if (err) {
            callback(err);
            return;
        }
        let collection = db.collection(collectionName);
        collection.updateOne(json, rule, (err, result) => {
            if (err) {
                throw err
                return;
            }
            callback(null, result);
        })
    });
};

exports.du = function (collectionName, json, args, cb) {
    let skipNumber, limit, callback, sort;
    if (arguments.length === 3) {
        callback = args;
        skipNumber = 0;
        limit = 0;
    } else if (arguments.length === 4) {
        skipNumber = parseInt(args.pageSize * args.page);
        limit = parseInt(args.pageSize);
        callback = cb;
        sort = args.sort || {}
    } else {
        throw '参数错误';
    }

    console.log(limit, skipNumber);

    _connectDB((err, db)=> {
        if (err) {
            callback(err);
            return;
        }
        let collection = db.collection(collectionName);
        collection.estimatedDocumentCount().then((res)=> {
            console.log(res)
        });
        let cursor = collection.find(json).limit(limit).skip(skipNumber).sort(sort);
        let arr = [];
        cursor.toArray((err, items)=> {
            if (err) {
                callback(err);
                db.close();
                return;
            }
            (function iterator(i) {
                if (arr.length === items.length) {
                    console.log(arr)
                    callback(null, arr);
                    return;
                }
                arr.push(items[i]);
                iterator(i + 1);
            })(0)
        })
    });
};

exports.getAllCount = function (collectionName, callback) {
    _connectDB(function (err, db) {
        if (err) {
            callback(err);
            return;
        }
        let collection = db.collection(collectionName);
        collection.count({}).then((count)=> {
            callback(null, parseInt(count));
        });
    })
};

exports.delete = function (collectionName, json, callback) {
    _connectDB(function (err, db) {
        if (err) {
            callback(err);
            return;
        }
        let collection = db.collection(collectionName);
        collection.deleteMany(json, function (err, result) {
            console.log(json);
            if (err) {
                callback(err);
                return;
            }
            callback(null, result);
        })
    })
}

