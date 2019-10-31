/**
 * Created by yangli on 2019/10/30.
 */

// 这个地方只处理对象

const Book = require('./../models/Book');
const mongoose = require('mongoose');

exports.showIndex = (req, res) => {
    Book.lieshu((err, result) => {
        res.render('index', {
            tushu: result
        })
    })
}

exports.addbook = (req, res) => {
    res.render('addbook');
};

exports.doadd = (req, res) => {
    console.log(typeof req.query);
    Book.create(req.query, (err) => {
        if (err) {
            throw err;
        }
        res.redirect('/');
    })
};

exports.showedit = (req, res) => {
    let _id = req.query.id;
    id = mongoose.Types.ObjectId(_id);
    Book.findBookById(_id, (err, result) => {
        res.render('edit', result[0]);
    })
};

exports.doedit = (req, res) => {
    let json = req.query;
    json['_id'] = mongoose.Types.ObjectId(json._id);
    Book.updateBook(json._id, json, (err, result) => {
        if (err) {
            throw err;
        }
        console.log(result)
        res.redirect('/');
    })
};