define(function (require, exports, module) {
    function Dog(name, age) {
        this.name = name;
        this.age = age;
    }

    Dog.prototype.eat = function () {
        console.log('我是：' + this.name);
    }

    module.exports = Dog;
})
