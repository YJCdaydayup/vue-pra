const crypto = require("crypto");

// const hash = crypto.createHash('md5');
// const hash = crypto.createHash('sha1');
// const hash = crypto.createHash('sha256');
const hash = crypto.createHash('sha512');
// 数据流时可以重复调用，拼接到摘要里面
hash.update('Sara');
hash.update('123')

// 计算所有传入数据的hash摘要。
// 参数encoding（编码方式）可以为'hex', 'binary' 或者'base64'。
console.log(hash.digest('hex'));