exports.test = 'B';

var A = require('./A');

console.log('在模块B里面执行的: ', A.test);

exports.test = 'BB';