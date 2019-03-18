/**
 * Created by yangli on 2019/3/5.
 */

'use strict'

const config = {
    api: {
        base: 'http://www.rg.taobao.com/mockjs/16560/',
        list: 'api/list',
        menue: 'api/menue',
        up: 'api/up',
        comments: 'api/commments',
        comment: 'api/comment',
        signup: 'api/user/signup',
        verity: 'api/user/verify'
    },
    map: {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        timeout: 8000
    }
}

module.exports = config;


