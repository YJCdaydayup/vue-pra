/**
 * Created by yangli on 2019/10/30.
 */

// 这个地方只处理对象

const Book = require('./../models/Book');

exports.showIndex = (req, res)=>{
    Book.lieshu((err, result)=>{
        res.render('index',{
            tushu: result
        })
    })
}

exports.addbook = (req, res)=> {
    res.render('addbook');
};

exports.doadd = (req, res)=> {
    console.log(typeof req.query);
    Book.create(req.query,(err)=>{
        if (err) {
            throw err;
        }
        res.send('保存成功');
    })
};