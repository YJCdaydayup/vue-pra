var fs = require('fs');

// 先打开文件，再截取文件，再读取文件存放buffer中，打印buffer中的内容 关闭文件
var buf = new Buffer.alloc(1024);

// ftruncate()截取文件内容，截取后原文件只保存截取后的内容
function cutFile() {
    fs.open('input.txt', 'r+', function (err, fd) {
        if (err) {
            return false;
        }

        fs.ftruncate(fd, 10, function (err) {
            if (err) {
                return false;
            }

            fs.read(fd, buf, 0, buf.length, 0, function (err, bytes,buffer) {
                if (err) {
                    return false;
                }

                if (bytes > 0) {
                    console.log(buf.toString() === buffer.toString());
                }

                fs.close(fd, function (err) {
                    if (!err) {
                        console.log('succuss close file ！！！');
                    }
                })
            })
        })
    })
}

function deleteFile() {
    fs.unlink('input.txt', function (err) {
        if (!err) {
            console.log('删除文件成功!');
        }
    })
}

// deleteFile();

function mkdir() {
    fs.mkdir('./test', function (err) {
        if (!err) {
            console.log('创建文件夹成功');
        }
    })
}

// mkdir()

// 读取一级目录
function readdir() {
    fs.readdir('./',function (err, files) {
        console.log(files);
    })
}

// readdir()

function rmdir() {
    fs.rmdir('./test.txt', function () {

    })
}

rmdir();