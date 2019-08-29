'use strict'

const fs = require('fs');

const crypto = require('crypto')

// 加密
function aesEncrypto(data, key) {
    const cipher = crypto.createCipher('aes-256-cbc', key);
    var crypted = cipher.update(data, 'utf8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
}

// 解密
function aesDecrypt(encrypted, key) {
    const decipher = crypto.createDecipher('aes-256-cbc', key);
    var decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}


let key = '***';

// fs.readFile('./irmn.txt', 'utf8', (err, data) => {
//     if (!err) {
//         let encryped = aesEncrypto(data, key);
//         fs.writeFile('./secret.txt', encryped, (err) => {
//             console.log('完成');
//         })
//     }
// })

// 解密
fs.readFile('./secret.txt', 'utf8', (err, data) => {
    if (!err) {
        let decrypted = aesDecrypt(data,key);
        fs.writeFile('./irmn.txt', decrypted, (err) => {
            console.log('完成');
        })
    }
})

