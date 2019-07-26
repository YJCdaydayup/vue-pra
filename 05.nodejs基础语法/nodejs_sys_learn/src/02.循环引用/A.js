exports.test = 'A';

var B = require('./B');

console.log('在模块A里面执行的: ',B.test);

exports.test = 'AA';


