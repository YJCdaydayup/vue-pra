const crypto = require('crypto');

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

let data = 'Hello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello worldHello world';

let key = 'password_key';

let encryped = aesEncrypto(data,key);

let decrypted = aesDecrypt(encryped,key);

// console.log(data)
console.log(encryped)
// console.log(decrypted)