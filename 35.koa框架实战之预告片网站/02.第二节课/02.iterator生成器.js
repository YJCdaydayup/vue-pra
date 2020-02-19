'use strict'

// function makeIterator(arr) {
//     let nextIndex = 0
//
//     // 返回一个迭代器对象
//     return {
//         next: () => {
//             if (nextIndex < arr.length) {
//                 return {
//                     value: arr[nextIndex ++],
//                     done: false
//                 }
//             }else {
//                 done: true
//             }
//         }
//     }
// }
//
// const it = makeIterator(['a','b','c'])
//
// // 此时的it其实都是同一个对象
// console.log('首先', it.next().value)
// console.log('其次', it.next().value)
// console.log('然后', it.next().value)
// console.log('最后', it.next().done)
// console.log('最后', it.next().done)
// console.log('最后', it.next().done)
// console.log('最后', it.next().done)

// 生成器就是生产迭代器的函数
// 就是为了简化上面的代码生产迭代器
// 语法层面多了 * 和 yield
function *makeIterator(arr) {
    for (let i = 0; i < arr.length; i++) {
        yield arr[i]
    }
}

const gen = makeIterator([1,2,3,4,5,6])
console.log('首先', gen.next())
console.log('其次', gen.next().value)
console.log('然后', gen.next().value)
console.log('最后', gen.next().value)
console.log('最后', gen.next().value)
console.log('最后', gen.next().value)
console.log('最后', gen.next().value)
console.log('最后', gen.next().value)

