'use strict'

function test(callback) {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(callback(123))
        }, 2000);
    })
    let sum = 0
    for (let i = 100;i--;) {
        sum += i;
    }
    return sum
}

async function fn() {
    let x = await test((res)=>{
        return res + '123'
    })
    console.log(x)
}

fn()