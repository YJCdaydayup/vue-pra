/**
 * Created by yangli on 2019/10/30.
 */
const mongoose = require('mongoose');
const db = require('./db');
const ObjectId = require('mongoose')

let schema = new mongoose.Schema({
    name: {type: String},
    author: {type: String},
    price: {type: Number},
    type: {type: Array},
    datetime: {type: Date, default: Date.now},
    mix: [
        {name: String,age:Number}
    ]
});

schema.statics.lieshu = function (callback) {
    this.model('Book').find({}, callback);
};

schema.statics.findBookById = function (id, callback) {
    this.model('Book').find({_id: id}, callback);
};

schema.methods.deleteSelf = function (callback) {
    this.model('Book').deleteOne({
        _id: this._id
    }, callback);
};

schema.statics.updateBook = function (_id, json, callback) {
    this.model('Book').updateOne({_id}, {
        $set: json
    }, callback);
};

let Book = db.db.model('Book', schema);

module.exports = Book;