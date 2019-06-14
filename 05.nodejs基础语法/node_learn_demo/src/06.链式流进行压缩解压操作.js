var fs = require('fs');
var zlib = require('zlib');


var Type = {};
for (var i = 0, type; type = ['Object', 'Number', 'Array'][i++];) {
    Type['is' + type] = (function (type) {
        return function (obj) {
            return Object.prototype.toString.call(obj) === '[object ' + type + ']';
        }
    })(type)
}

function gzip() {
    return new Promise(function (resolve, reject) {
        var res = fs.createReadStream('input.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('input.txt.gz'))
        if (Type.isObject(res)) {
            resolve();
        }
    })
}

function unzip() {
    return new Promise(function (resolve, reject) {
        var res = fs.createReadStream('input.txt.gz').pipe(zlib.createGunzip()).pipe(fs.createWriteStream('input.txt'));
        if (Type.isObject(res)) {
            resolve();
        }
    })
}

gzip().then(function () {
    console.log('压缩完成');
    unzip().then(function () {
        console.log('解压完成');
    })
})
