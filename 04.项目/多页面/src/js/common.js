/**
 * Created by yangli on 2018/10/14.
 */

import './../css/index.css'

// 通过require.js的AMD定义模块
define('common',function () {
    return {
        initIndex: function () {
            console.log("common init index");
        },
        initCart: function () {
            console.log("common init cart");
        }
    }})