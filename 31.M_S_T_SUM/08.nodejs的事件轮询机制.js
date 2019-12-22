'use strict'
//
// setTimeout(()=> {
//   console.log('setTimeout');
// }, 0)
//
// setImmediate(()=> {
//   console.log('setImmediate')
// });
//
process.nextTick(()=> {
  console.log('nextTick')
});


/*
 闭包：

 */

function fun() {
  var count = 1;
}


/**
 * 1.js事件轮询机制
 * 2.js是单线程，叫它主线程，异步任务就有回调函数，底层开启子线程去处理，处理完成后就放到轮询队列里面等待回调到主线程
 * 3.这种机制和nodejs是一样的
 **/

console.log('开始')

setTimeout(function () {
  console.log('setTimeout');
}, 10000);


new Promise((resolve, reject)=> {
  for(var i =0;i<5;i++) {
    console.log(i);
  }
  setTimeout(function () {
    resolve()
  },0);
}).then(()=>{
  console.log('promise执行完毕')
});

console.log('结束')


