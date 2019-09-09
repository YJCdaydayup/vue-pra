/**
 * Created by yangli on 2019/9/7.
 */

'use strict'

const file = require('./../models/file');


// 从这里可以看出数据回来都是异步的，这个时候可以使用promise或者callback来回调到数据再执行
exports.showIndex = function (req, res,next) {
    // res.render('index',{albums:file.getAllAlbums()});
    file.getAllAlbums((err, allAlbums)=> {
        if (err) {
            next()
            return ;
        }
        res.render('index', {albums: allAlbums});
    })
}

exports.showAlbum = function (req, res,next) {
    let {albumName} = req.params;
    // res.send(albumName);
    // 获取相册中的所有图片
    // 具体业务交给model
    file.getAllImagesByAlbumName(albumName,function (err, images) {
       if (err) {
           next();
           return ;
       }
        res.render('albums',{
            albumname: albumName,
            albums: images
        })
    });
}
