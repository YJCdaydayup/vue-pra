/**
 * Created by yangli on 2019/10/16.
 */
'use strict'

const fs = require('fs');
const gm = require('gm');

gm('./public/imgs/err.jpg').resize(50,50,'!').write('./public/imgs/des.jpg',function (err) {
    console.log(err)
   if (!err) {
       console.log('done');
   }
});

gm('./public/imgs/err1.jpg')
    .flip()
    .magnify()
    .rotate('green', 45)
    .blur(7, 3)
    .crop(300, 300, 150, 130)
    .edge(3)
    .write('./public/imgs/crazy.jpg', function (err) {
        if (!err) console.log('crazytown has arrived');
    })
