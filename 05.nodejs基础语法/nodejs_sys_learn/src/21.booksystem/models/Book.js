/**
 * Created by yangli on 2019/10/30.
 */
const mongoose = require('mongoose');
const db = require('./db');

let schema = new mongoose.Schema({
    name: {type: String},
    author: {type: String},
    price: {type: Number},
    type: {type: Array}
});

schema.statics.lieshu = function (callback) {
    this.model('Book').find({},callback);
};

let Book = db.db.model('Book', schema);

module.exports = Book;