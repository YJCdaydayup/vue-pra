var fs = require('fs');
var data = '';

var readerStream = fs.createReadStream('input.txt');

readerStream.setEncoding('UTF8');

readerStream.on('data', function (chunk) {
    console.log(chunk)
   data += chunk;
});

readerStream.on('end', function () {
    // console.log(data);
})

readerStream.on('error', function (err) {
    console.log(err.stack);
})

console.log('执行完毕');

var writeStream = fs.createWriteStream('output.txt');
readerStream.pipe(writeStream);
