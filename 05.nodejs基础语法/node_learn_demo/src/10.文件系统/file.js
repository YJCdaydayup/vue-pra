var fs = require('fs');

// fs.open('input.txt', 'w', function (err, fd) {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('打开文件成功');
// })
//
// fs.stat('input.txt', function (err, stats) {
//     console.log(stats)
//     console.log(stats.isFile())
// })
//
// // 默认是w的方式打开文件，会覆盖原有文件
// fs.writeFile('input.txt', '写入的文件', function (err) {
//     if (!err) {
//         fs.readFile('input.txt', function (err, data) {
//             if (data) {
//                 console.log(data)
//             }
//         })
//     }
// })


var buf = Buffer.from('我是buffer')

fs.open('input.txt', 'r+', function (err, fd) {
    if (!err) {
        // read()通过文件描述符读取文件
        // 第三个参数是写入buffer中的偏移量
        fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
            if (bytes > 0) {
                console.log(buf.slice(0, bytes.length).toString());
                fs.close(fd,function (err) {
                    if(!err) {
                        console.log('文件关闭成功');
                    }
                })
            }
        })
    }
})



