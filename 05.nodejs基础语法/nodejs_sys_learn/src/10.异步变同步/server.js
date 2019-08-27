'use strict'

const http = require('http');
const fs = require('fs');
const path = require('path')

// let server = http.createServer(function (request, response) {
//   // 不处理小图标
//   if (response.url == '/favicon.ico') {
//     return;
//   }
fs.readdir('./../', (err, files) => {
    // files是一个存放文件名和文件夹名的数组
    let wjj1 = [];
    let wjj = [];
    //
    // Array.prototype.forEach.call(files, (file, index) => {
    //     fs.stat('./../' + file, (err, stats) => {
    //         if (stats.isDirectory()) {
    //             wjj1.push(file);
    //             console.log(file)
    //         }
    //     })
    // })

    // (function iterator(i) {
    //   if (i == files.length) {
    //     console.log(wjj)
    //     return;
    //   }
    //   fs.stat('./../' + files[i], (err, stats)=> {
    //     if (stats.isDirectory()) {
    //       wjj.push(files[i]);
    //     }
    //     iterator(i + 1);
    //   })
    // })(0)

    (function iterator(i) {
        if (i == files.length) {
            console.log(wjj)
            return ;
        }
        fs.stat('./../' + files[i], (err, stats) => {
            if (stats.isDirectory()) {
                wjj.push(files[i]);
            }
            iterator(i+1)
        })
    })(0)
})
// })
