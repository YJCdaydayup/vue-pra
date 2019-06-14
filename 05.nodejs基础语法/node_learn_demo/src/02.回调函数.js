var fs = require('fs');
// 会阻塞主线程
// var data = fs.readFileSync('input.txt');
// console.log(data.toString());

// 不会阻塞线程
fs.readFile('input.txt', (err, data)=>{
    if (err) {
        return console.error(err);
    }
    console.log(data.toString());
})

console.log('执行程序结束');