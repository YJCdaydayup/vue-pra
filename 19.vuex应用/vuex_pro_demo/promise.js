// 1.async加在函数前面代表函数是异步函数，会返回一个promise对象，一般里面获取返回值要return这个值，然后要获取这个函数return的值，就用.then语法
async function timeout() {
  return 'hello world';
}

// 报错就里面会调用Promise.reject()返回)在外面就用.catch()获取错误信息
timeout().then((res) => {
  console.log(res);
});


// 2.async函数里面默认会创建一个Promise对象并将这个promise返回，正确reture就相当于返回了promise.resolve()，抛错就相当于返回了promise.reject()，对于promise.reject()对象可以使用.catch(err=>{})来获取，如果async函数没有返回值，可以调用.then，但里面的值就undefined


// 3.await就是等待的意思，后面跟一个函数返回promise的函数，用于拿到promise.resolve()里面的值，这个await func必须放在async函数里面,如果await后面的func不resolve()，那么await下的代码就永远也不会执行

// 4.也可以只用async，代表这个函数是异步的
fn = () => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(function () {
        a = Math.random();
        if (a < 1) {
          reject('我是错误的返回');
        } else {
          resolve('我是正确的返回');
        }
      }, 2000);
    } catch (err) {
      reject(err);
    }
  })
};


// fn().then((res) => {
//   console.log(res);
// }).catch((err) => {
//   console.log(err);
// })

function test2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('我是test2');
    }, 2000)
  })
}

async function test1() {
  let x = await test2();
  console.log('先等2秒')
  return x;
}

test1().then((res) => {
  console.log(res);
})
