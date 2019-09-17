'use strict'

const fs = require('fs');
const formidable = require('formidable');
const path = require('path');

exports.showAlbums = function (callback) {
    fs.readdir('./uploads', function (err, files) {
        if (err) {
            callback(err);
            return;
        }
        callback(null, files);
    })
}

exports.showAlbumImages = function (albumName, callback) {
    fs.readdir('./uploads' + '/' + albumName, (err, files) => {
        if (err) {
            callback(err);
            return;
        }
        let images = [];
        (function iterator(i) {
            if (images.length === files.length) {
                callback(null, images);
                return;
            }
            fs.stat('./uploads' + '/' + albumName + '/' + files[i], (err, stats) => {
                if (stats.isFile()) {
                    images.push(files[i]);
                }
                iterator(i + 1);
            })
        })(0)
    })
}

exports.handleUpInfo = function (req, callback) {
    let form = new formidable.IncomingForm();
    form.uploadDir = './tempup';
    form.parse(req, function(err, fields, files) {
        if (err) {
            callback(err);
            return;
        }
        let ablumName = fields.ablum;
        let extname = path.extname(files.image.name);
        let {size} = files.image;
        if (size > 1024) {
            callback('1233');
            return;
        }
        let oldPath = files.image.path;
        let newPath = './uploads/' + ablumName + '/' + parseInt(Math.random()*10000+10000)+ extname;
        fs.rename(oldPath,newPath,(err) =>{
            if (err) {
                callback(err);
                return;
            }
            console.log(oldPath);
            console.log(newPath);
            callback(null,123456);
        })
    });
}