const R = require('ramda')

// forEach
let arr = ['a', 'b', 'c']
R.forEach((v)=>{
    // console.log(v)
}, arr)

// map
let brr = R.map((v)=>{
    return 'A-' + v
}, arr)
// console.log(brr)

// 自定义map函数
const map = (fn, arr) => {
    // for (let i = 0; i < arr.length; i++) {
    //     fn(arr[i], i)
    // }
    for (let o of arr) {
        console.log(o)
    }
}

// 管道
function f1(x) {
    return x + 'a'
}

function f2(x) {
    return x + 'b'
}

function f3(x) {
    return x + 'c'
}

const operate = R.pipe(
    f1,
    f2,
    f3
)

const operate1 = R.compose(
    f1,
    f2,
    f3
)

// console.log(operate('1'))
// console.log(operate1('1'))

const compose = (f1, f2, f3) => {
    return function (param) {
        let arr = [f1, f2, f3]
        for (let i = arr.length; i--;) {
            let f = arr[i]
            param = f(param)
        }
    }
}

const { resolve } = require('path')

compose(
    // TODO:
    function(fn) {
        fn()
    },
    require,
    name => resolve(__dirname, `./middleware/${name}`)
)('user')
    

const add = (a, b , c, d) => a + b + c + d
const curriedAdd = R.curry(add)
const c1 = curriedAdd(1)
const c2 = c1(2)
const c3 = c2(3)
const c4 = c3(4)
console.log(c4)


function koa_compose(middlewares) {
    return function(ctx) {
        let index = 0
        function dispatch() {
            if (index === middlewares.length) {
                return false
            }
            let fn = middlewares[index]
            return fn(ctx, function() {
                return dispatch( index ++ )
            })
        }
        dispatch(0)
    }
}

koa_compose([
    function(ctx, next) {
        console.log('f1')
        next()
        console.log('f1')
    },
    function (ctx, next) {
      console.log('f2')
      next()
      console.log('f2')
    },
    function (ctx, next) {
      console.log('f3')
      next()
      console.log('f3')
    }
])({})