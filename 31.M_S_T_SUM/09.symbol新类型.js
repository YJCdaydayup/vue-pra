'use strict'


let a = Symbol('ancd')

let obj = {
    [a]: 1,
    b() {

    }
}

// console.log(obj[a])
//

let arr = [1,2,3]

let x = arr.some( v => v > 2)
let y = arr.every( v => v > 2)
console.log(x)
console.log(y)
