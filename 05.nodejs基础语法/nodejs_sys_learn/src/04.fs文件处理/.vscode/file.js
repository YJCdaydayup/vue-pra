var fs = require('fs')
var path = require('path')
//
// fs.mkdir('./test', (err) => {
//   fs.writeFile('./test/test.txt', '测试文件', 'utf8', (err) => {
//   fs.readFile('./test/test.txt', 'utf8', (err, data) => {
//   fs.readdir('./test', (err, files) => {
//   console.log(Object.prototype.toString.call(files))
//   files.forEach((file)=>{
//     fs.stat('./test/' + file, (err, stats) => {
//       if (stats.isFile()) {
//         console.log('是文件')
// }
//   })
//   })
// })
// })
// })
// })

fs.mkdir('./test', (err) => {
    fs.writeFile('./test/test.txt', '测试文件', 'utf8', (err) => {
        fs.readFile('./test/test.txt', 'utf8', (err, data) => {
            fs.readdir('./test', (err, files) => {
                console.log(Object.prototype.toString.call(files))
                files.forEach((file)=> {
                    fs.stat('./test/' + file, (err, stats) => {
                        if (stats.isFile()) {
                            console.log(path.basename('...../test/' + file, '.txt'))
                        }
                    })
                })
            })
        })
    })
})


// fs.stat('./a', (err, stats)=>{
//   if (stats.isFile()) {
//
// }
// })

fs.access('./new', function (err) {
    if (err) {
        fs.mkdir('./new', function (err) {
            if (!err) {
                oparation(fs, 'sjbcibcaskcnasjkcnsacascnsalcknsa');
            }
        })
    } else {
        oparation(fs, 'achjiskjdhvhcbkalsjkjbvjhsbkcljakbjvhjdbkcnljabjdhvjkcnljabjdhvjkcnljajbvdhk');
    }
})


function oparation(fs, content) {
    fs.writeFile('./new/test.txt', '文件内容', 'utf8', function (err) {
        if (!err) {
            fs.readFile('./new/test.txt', 'utf8', function (err, data) {
                if (!err) {
                    fs.appendFile('./new/test.txt', content, 'utf8', function (err) {
                        if (!err) {
                            fs.readdir('./new', function (err, files) {
                                if (!err) {
                                    files.forEach(function (file) {
                                        var path1 = path.join(__dirname, './new/' + file);
                                        fs.stat(path1, function (err, stats) {
                                            if (stats.isFile()) {
                                                var ext = path.extname(path1);
                                                var filePath = path.dirname(path1)
                                                var filenameWithExt = path.basename(path1);
                                                var filenameNotExt = path.basename(path1, ext);
                                                console.log(filenameNotExt)
                                            }
                                        })
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }
    })
}
