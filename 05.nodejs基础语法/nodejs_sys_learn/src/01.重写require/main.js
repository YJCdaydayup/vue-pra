var myRequire = require('./MyRequire')
var TestModule = myRequire('./TestModule.js');
var test = new TestModule('wangcai','18')
test.say();