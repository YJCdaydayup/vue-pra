const crypto = require('crypto');

// xm
let xm = crypto.createDiffieHellman(122); // 秘密整数
let xm_key = xm.generateKeys();          // 底数，任意
let p = 13;                   // 质数
let g = xm.getGenerator();               // 生成数

// xh
let xh = crypto.createDiffieHellman(p, g);
let xh_key = xh.generateKeys();          // 底数 任意

var ming_secret = xm.computeSecret(xh_key);
var hong_secret = xh.computeSecret(xm_key);

console.log(ming_secret.toString('hex'))
console.log(hong_secret.toString('hex'))