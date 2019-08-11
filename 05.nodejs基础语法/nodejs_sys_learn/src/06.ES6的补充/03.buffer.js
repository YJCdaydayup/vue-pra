`use strict`

let buf = new Buffer(5);

buf[0] = 13
buf[1] = 12

// console.log(buf.toString())


const fs = require('fs')

const rs = fs.createReadStream('./stream.txt');
const ws = fs.createWriteStream('./stream1.txt');

// rf.pipe(ws);


let totalLength = 0;
fs.stat('./stream.txt', (err,stats)=>{
    totalLength = stats.size;
})

let currentLength = 0;

rs.on('data', (chunk)=>{
    currentLength += chunk.length;
    let rate = currentLength / totalLength
    console.log(rate)
})

rs.on('end', ()=>{
    console.log('结束了')
})
