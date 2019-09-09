/**
 * Created by yangli on 2019/9/7.
 */
/**
 * 封装所有关于文件的操作
 */

const fs = require('fs');
const path = require('path');

exports.getAllAlbums = function (callback) {
    // 现在找到所有文件夹
    fs.readdir("./uploads", (err, files)=> {
        if (err) {
            callback('没有找到uploads文件夹');
            return ;
        }
        var allAlbums = [];
        (function iterator(i) {
            if (i === files.length) {
                // return allAlbums;
                callback(null, allAlbums);
                // 这里要return一下，不然后面会继续执行报错的，没有必要继续执行后面的了
                return;
            }
            fs.stat('./uploads/' + files[i], (err, stats)=> {
                if (err) {
                    throw err;
                }
                if (stats.isDirectory()) {
                    allAlbums.push(files[i]);
                }
                iterator(i + 1);
            })
        })(0)
    });
};

/**
 * 通过文件名得到所有图片
 **/
exports.getAllImagesByAlbumName = function (albumName, callback) {
    fs.readdir("./uploads/" + albumName, (err, files)=> {
        if (err) {
            callback('没有找到uploads文件夹');
            return;
        }
        var images = [];
        (function iterator(i) {
            if (i === files.length) {
                // return allAlbums;
                callback(null, images);
                // 这里要return一下，不然后面会继续执行报错的，没有必要继续执行后面的了
                return;
            }
            fs.stat('./uploads/'+ albumName + '/' + files[i], (err, stats)=> {
                if (err) {
                    throw err;
                }
                if (stats.isFile()) {
                    images.push(files[i]);
                }
                iterator(i + 1);
            })
        })(0)
    });
};