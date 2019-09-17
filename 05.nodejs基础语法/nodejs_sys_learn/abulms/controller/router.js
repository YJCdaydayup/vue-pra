"use strict"

const file = require('./../models/file')

exports.showMain = function (req, res, next) {
    console.log(123)
    file.showAlbums(function (err, files) {
        if (err) {
            next();
            return;
        }
        res.render('index', {
            ablums: files
        });
    })
};

exports.showAlbumImages = function (req, res, next) {
    let ablumName = req.params.id;
    file.showAlbumImages(ablumName, (err, images) => {
        if (err) {
            console.log(err);
            next();
            return;
        }
        res.render('images', {
            images: images,
            title: ablumName
        })
    })
};

exports.uploads = function (req, res, next) {
    file.showAlbums(function (err, files) {
        if (err) {
            next();
            return;
        }
        res.render('upload', {
            ablums: files
        });
    })

}

exports.upInfo = function (req, res, next) {
    file.handleUpInfo(req,function (err, data) {
        if (err) {
            next();
            return;
        }
        res.send("123");
    })
}