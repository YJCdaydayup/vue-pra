/**
 * Created by yangli on 2019/10/16.
 */

const crypto = require('crypto');

module.exports = function (mima) {
    let md5 = crypto.createHash('md5');
    let password = md5.update(mima).digest('base64');
    return password;
}