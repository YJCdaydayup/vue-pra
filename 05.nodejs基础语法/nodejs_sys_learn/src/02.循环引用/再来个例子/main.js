var a = require('./a.js'); // a.done = true
var b = require('./b.js'); // b.done = true
console.log('在 main.js 之中, a.done=%j, b.done=%j', a, b.done);
console.log('%j',a)


/**
 console.log('在 b.js 之中，a.done = %j', 'false');
 console.log('b.js 执行完毕');
 console.log('在 a.js 之中，b.done = %j', 'true');
 console.log('a.js 执行完毕');
 console.log('在 main.js 之中, a.done=%j, b.done=%j', 'true', 'ture');
 **/