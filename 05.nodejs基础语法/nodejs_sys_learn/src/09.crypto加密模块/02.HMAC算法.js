const crypto = require('crypto')

const hmac = crypto.createHmac('sha256','mscascascsacsa我的y_key');

hmac.update('Hello world')
hmac.update('Hello nodejs')

console.log(hmac.digest('hex'));