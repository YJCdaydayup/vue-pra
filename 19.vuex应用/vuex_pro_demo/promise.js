// 1.async加在函数前面代表函数是异步函数，就会返回一个promise对象，要获取这个函数return的值，就用.then语法
async function timeout() {
  return 'hello world';
}
// 获取异步函数里面正确return的值(有return值且成功，就会调用Promise.resolve()返回promise对象,报错就调用Promise.reject()返回promise对象)
timeout().then((res)=>{
  console.log(res);
});


// 2.async函数里面默认会创建一个Promise对象，正确reture就相当于返回了promise.resolve()也是一个promise对象，抛错就相当于返回了promise.reject()也是一个promize对象，对于promise.reject()对象可以使用.catch(err=>{})来获取，如果async函数没有返回值，就是正确不调用里面的promise.resolve()


// 3.await就是等待的意思，后面跟一个函数返回promise的函数，返回promise就是调用了promise.resolve或者promise.reject()，这个函数必须，必须放在async函数里面
