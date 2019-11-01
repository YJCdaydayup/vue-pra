/**
 * Created by yangli on 2019/10/30.
 */

// 这个地方只处理对象

const Book = require('./../models/Book');
const mongoose = require('mongoose');

exports.showIndex = (req, res) => {
    // Book.lieshu((err, result) => {
    //     res.render('index', {
    //         tushu: result
    //     })
    // })
    Book.find({}, null, {sort: [{datetime: -1}]}, (err, result) => {
        res.render('index', {
            tushu: result
        })
    });
}

exports.addbook = (req, res) => {
    res.render('addbook');
};

exports.doadd = (req, res) => {
    let query = req.query;
    query.mix = [{name: 'Jeff', age: 18}];
    console.log(query)
    Book.create(query, (err) => {
        if (err) {
            throw err;
        }
        res.redirect('/');
    })
};

exports.showedit = (req, res) => {
    let _id = req.query.id;
    _id = mongoose.Types.ObjectId(_id);
    // Book.findBookById(_id, (err, result) => {
    //     res.render('edit', result[0]);
    // })
    Book.findOne({_id}, (err, result) => {
        res.render('edit', result);
    });
};

exports.doedit = (req, res) => {
    let json = req.query;
    json['_id'] = mongoose.Types.ObjectId(json._id);
    // Book.updateBook(json._id, json, (err, result) => {
    //     if (err) {
    //         throw err;
    //     }
    //     console.log(result)
    //     res.redirect('/');
    // })
    Book.findOne({_id: json._id}, (err, item) => {
        for (let k in json) {
            item[k] = json[k];
        }
        console.log(item.datetime)
        item.datetime = new Date();
        console.log(item.datetime)
        item.save((err) => {
            if (err) {
                throw '更新失败'
            }
            res.redirect('/');
        })
    })
};

exports.delete = (req, res) => {
    let _id = req.query.id;
    _id = mongoose.Types.ObjectId(_id);
    Book.findOne({_id}, (err, item) => {
        if (err) {
            throw err;
        }
        item.deleteSelf(function (err, result) {
            if (err) {
                throw err;
            }
            res.redirect('/');
        });
    })
};