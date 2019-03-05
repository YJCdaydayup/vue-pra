/**
 * Created by yangli on 2019/3/5.
 */

'use strict';

// query-string 请求拼接字符串
// lodash 合并json对象的

import Mock from 'mockjs'
import queryString from 'query-string'
import _ from 'lodash'
import config from './config'

let request = {};

// 设定params json对象
request.get = (url, params) => {
// '&' + key + '=' + value
    if (params) {
        url += '?' + queryString.stringify(params);
    }
    // 发送网络请求
    return fetch(url).then((response) => response.json()).then((res) => Mock.mock(res));

};

request.post = (url, body) => {
    let map = _.extend(config.map, {
        body: JSON.stringify(body)
    });
    return fetch(url, map).then((reponse)=>reponse.json).then((result)=>Mock.mock(result));
};

module.exports = request;


