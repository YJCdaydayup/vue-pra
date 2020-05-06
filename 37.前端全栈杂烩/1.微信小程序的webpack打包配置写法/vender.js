import regeneratorRuntime from 'regeneratorRuntime'
global.regeneratorRuntime = regeneratorRuntime

import url from './utils/util'
global.util = url

import R from 'ramda'
global.R = R

const asyncWrap = fn => (options = {}) => new Promise((resolve)=>{
    let conf = {
        success(res){
            resolve(res)
        }
    }
})