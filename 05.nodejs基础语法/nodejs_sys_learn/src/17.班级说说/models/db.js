/**
 * Created by yangli on 2019/9/29.
 */

const MongoClient = require('mongodb').MongoClient;
const settings = require('./../setting/setting');

// require的时候会执行这个文件一次而已，进来的时候建立索引
__init();


function __init() {
    _connectDB(function (err, db) {
        if (err) {
            throw err;
        }
        let collection = db.collection('users');
        collection.createIndex({
            username: 1,
            function(err, result) {
                console.log()
            }
        })
    })
}

// 不管数据库的什么操作都要先连接数据库，可以把这个封装
// 加下划线表示内部函数
function _connectDB(callback) {
    MongoClient.connect(settings.dburl, (err, client) => {
        // if (err) {
        // throw err;
        // }
        console.log('连接数据库成功');
        var db = client.db('bjss');
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
                return;
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
    } else {
        throw '参数错误';
    }
    _connectDB((err, db) => {
        let collection = db.collection(collectionName);
        let cursor = collection.find(json, {_id: 0}).skip(skipNumber).limit(limit);
        cursor.toArray(function (err, items) {
            if (err) {
                callback(err);
                return;
            }
            let data = [];
            (function iterator(i) {
                if (data.length === items.length) {
                    callback(null, data);
                    return;
                }
                data.push(items[i]);
                iterator(i + 1);
            })(0)
        });
    })
}

exports.pushAll = function (collectionName, json, rule, callback) {
    _connectDB((err, db) => {
        if (err) {
            callback(err);
            return;
        }
        let collection = db.collection(collectionName);
        collection.estimatedDocumentCount().then((res) => {
            console.log(res)
        });
        let cursor = collection.find(json).limit(limit).skip(skipNumber).sort(sort);
        let arr = [];
        cursor.toArray((err, items) => {
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
            collection.updateMany(json, rule, (err, result) => {
                if (err) {
                    throw err
                    callback(err);
                    return;
                }
                callback(null, result);
            })
        });
    })
}

exports.getAllCount = function (collectionName, callback) {
    _connectDB(function (err, db) {
        if (err) {
            callback(err);
            return;
        }
        let collection = db.collection(collectionName);
        collection.count({}).then((count) => {
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
};

exports.multiFind = function (collectionName, query, params, callback) {
    let find_query, request_query, completion;
    let pageSize, page, sort;
    let skipedNumber;
    let result = [];
    if (arguments.length === 3) {
        completion = params;
        find_query = query;
        pageSize = 0;
        page = 0;
        sort = {};
    } else if (arguments.length === 4) {
        find_query = query;
        request_query = params;
        completion = callback;
        pageSize = parseInt(find_query.pageSize || 0);
        page = parseInt(find_query.page || 0);
        sort = request_query.sort; // {name:1}
    }else {
        console.log(arguments)
        throw '参数错误';
    }
    skipedNumber = pageSize * page;
    _connectDB((err, db) => {
        if (err) {
            completion(err);
            return;
        }
        let collection = db.collection(collectionName);
        let cursor = collection.find(find_query).skip(skipedNumber).limit(pageSize).sort(sort);
        cursor.toArray((err, items) => {
            if (err) {
                completion(err);
                return;
            }
            if (items.length === 0) {
                completion(null, result);
                return;
            }
            (function iterator(i) {
                if (result.length === items.length) {
                    completion(null, result);
                    return;
                }
                result.push(items[i]);
                iterator(i + 1);
            })(0)
        })
    });

};

