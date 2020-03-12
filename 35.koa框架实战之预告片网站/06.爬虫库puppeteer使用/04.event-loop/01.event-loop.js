'use strict'

const fs = require('fs')

setTimeout(() => { 
    console.log('setTimeout第1次')
    setImmediate(() => { console.log('setImmediate第2次') })
 }, 0)
setTimeout(() => { console.log('setTimeout第2次') }, 0)
setTimeout(() => { console.log('setTimeout第3次') }, 0)

setImmediate(() => { console.log('setImmediate第1次')})

process.nextTick(() => { 
    process.nextTick(() => { console.log('nextTick第3次') })
    console.log('nextTick第1次')
    process.nextTick(() => { 
        setImmediate(() => { console.log('setImmediate第5次') })
        console.log('nextTick第2次') 
    })
})
process.nextTick(() => { console.log('nextTick第x次') })

Promise.resolve(123).then(()=>{
    console.log('Promise.resolve回调第1次')
    setTimeout(() => { console.log('setTimeout第Z次') }, 0)
    process.nextTick(() => { console.log('nextTick第4次') })
    setTimeout(() => { console.log('setTimeout第5次') }, 0)
})

setTimeout(() => {
    console.log('setTimeout第6次') 
}, 100);

fs.readFile('./01.event-loop.js','utf8',()=>{
    console.log('readFile第1次')
    setTimeout(() => { 
        console.log('setTimeout第8次') 
        process.nextTick(() => { console.log('nextTick第y次') })
    }, 0)
})

fs.readFile('./01.event-loop.js', 'utf8', () => {
    console.log('readFile第2次')
    setTimeout(() => {
        process.nextTick(() => { console.log('nextTick第z次') })
        setImmediate(() => { console.log('setImmediate第4次') })
        console.log('setTimeout第7次')
    }, 100);
})