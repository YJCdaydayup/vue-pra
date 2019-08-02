function Test(name,age) {
    this.name = name;
    this.age = age;
}

Test.prototype.say = function () {
    console.log('my name is ' + this.name)
}

exports.add = function () {
    console.log('add');
}

module.exports = Test;
