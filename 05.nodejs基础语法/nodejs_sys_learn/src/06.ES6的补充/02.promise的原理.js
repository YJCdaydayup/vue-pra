`use strict`

const fs = require('fs')

function rf() {
    return new Promise((resolve, reject)=>{
       let data = fs.readFileSync('./01.字符串扩展.js','utf8');
        resolve(data)
    })
}

rf().then((data)=>{
    console.log(data);
})

console.log('123456')
