'use strict'

const util = require('util')

function mycallback(params1,params2,callback) {
  try {
    let paramstr = JSON.stringify(params1)
    paramstr = paramstr + JSON.stringify(params2)
    setTimeout(()=>{
      if (paramstr.indexOf('sara') > -1) {
        callback(null, paramstr)
      }else {
        callback(null, '错误')
      }
    }, 1000)
  }catch (err) {
    callback('错误')
  }
}

function transCallback(func, params1,params2) {
  return util.promisify(func)(params1, params2).then(data => data).catch(err => err)
}

// transCallback(mycallback,{
//   name: 'sar',
//   age: 18,
//   sex: '女'
// },{
//   name: 'jeff',
//   age: 20,
//   sex: '男'
// }).then(data => {
//   console.log('then: ', data)
// }).catch(err => {
//   console.log('catch: ', err)
// })

async function myAwait() {
  let data = await transCallback(mycallback,{
    name: 'sar',
    age: 18,
    sex: '女'
  },{
    name: 'jeff',
    age: 20,
    sex: '男'
  })
  console.log(data)
}

myAwait()


