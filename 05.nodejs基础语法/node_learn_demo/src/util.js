var util = require('util');
var Base = function () {
    this.name = 'Base';
    this.base = 1991;
    this.say = function () {
        console.log(this.name);
    }
}

Base.prototype.showName = function () {
    console.log('showname ' + this.name);
}

function inherits(sub,base) {
    var temp = function () {}
    temp.prototype = base.prototype;
    sub.prototype = new temp();
    sub.prototype.constructor = sub;
}

var Sub = function () {
    this.name = 'Sub'
}

// 1.util.inherits() 继承原型上的属性和方法
// util.inherits(Sub, Base);
// inherits(Sub,Base);
// var sub = new Sub();

// 2.util.inspect()将对象转换成字符串, 不是简单的转字符串，一般用于调试
function Person() {
    this.name = 'Sara';
    this.toString = function () {
        return this.name;
    }
}

// var obj = new Person();
// console.log(util.inspect(obj));
// console.log(util.inspect(obj,true))

// 3.util.isArray
console.log(util.isArray([]));

// 4.util.isRegExp()
console.log(util.isRegExp(/^a/));

// 5.util.isDate()
console.log(util.isDate(new Date()))

// 6.util.isError
console.log(util.isError(new Error()))

