// console.time('开始')
// console.log(__filename);
// console.log(__dirname)
// console.timeEnd('从开始到接收需要的时间')
// console.trace()

// a = start()
// console.error()
// __dirname __filename


process.on('exit', function (code) {
    setTimeout(function () {
        console.log('never excute');
    },2000)
    console.log('退出码: ', code);
})

console.log('程序结束');


// 输出到终端
process.stdout.write("Hello World!" + "\n");

// 通过参数读取
process.argv.forEach(function(val, index, array) {
    console.log(index + ': ' + val);
});

// 获取执行路径
console.log(process.execPath);


// 平台信息
console.log(process.platform);

// 输出当前目录
console.log('当前目录: ' + process.cwd());

// 输出当前版本
console.log('当前版本: ' + process.version);

// 输出内存使用情况
console.log(process.memoryUsage());

var a = 123
b = 234
console.log(global.b);
console.log(global.a);