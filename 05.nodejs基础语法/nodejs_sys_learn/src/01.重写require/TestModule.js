function Test(name,age) {
    this.name = name;
    this.age = age;
}

Test.prototype.say = function () {
    console.log('my name is ' + this.name)
}

module.exports = Test;