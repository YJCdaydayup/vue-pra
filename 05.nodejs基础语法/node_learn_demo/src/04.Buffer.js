const buf1 = Buffer.alloc(10);
const buf2 = Buffer.alloc(10,1);


// 创建快，长度10，为初始化可能包含旧数据
const buf3 = Buffer.allocUnsafe(10);

// 包含[0x1 0x2 0x3]
const buf4 = Buffer.from([1,2,3]);

// utf-8字节
const buf5 = Buffer.from('test');

// 包含 Latin-1 字节
const buf6 = Buffer.from('tést', 'latin1');

// var buf = Buffer.alloc(256);
// var len = buf.write('www.runboo,com');
// console.log('写入的字节数: ' + len);

// buf实例就是一个整数数组，可以给每个位置赋值为一个整数，再以ascii码输出就是对应的字符
buf = Buffer.alloc(26);
for (var i = 0 ; i < 26 ; i++) {
    buf[i] = i + 10000;
}

// console.log( buf.toString('latin1'));       // 输出: abcdefghijklmnopqrstuvwxyz
// console.log( buf.toString('ascii',0,5));   // 输出: abcde
// console.log( buf.toString('utf8',0,5));    // 输出: abcde
// console.log( buf.toString(undefined,0,5)); // 使用 'utf8' 编码, 并输出: abcde


// const buffer = Buffer.from([0x1,0x2,0x3,0x4,0x5]);
// const json = JSON.stringify(buffer);
// console.log(json);
// console.log(JSON.parse(json));


var buffer1 = Buffer.from('菜鸟教程');
console.log(buffer1.toString(undefined, 0,6))
var buffer2 = Buffer.from('www.runoob.com');
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer3 内容: " + buffer3.toString());


