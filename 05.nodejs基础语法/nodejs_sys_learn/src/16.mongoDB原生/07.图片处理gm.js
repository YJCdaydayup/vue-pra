/**
 * Created by yangli on 2019/10/16.
 */
'use strict'

const fs = require('fs');
const gm = require('gm');

// gm('./public/imgs/err.jpg').resize(50,50,'!').write('./public/imgs/des.jpg',function (err) {
//     console.log(err)
//    if (!err) {
//        console.log('done');
//    }
// });

gm('./public/imgs/err.jpg')
    .identify(function (err, data) {
        console.log(err)
        if (!err) console.log(data)
    });