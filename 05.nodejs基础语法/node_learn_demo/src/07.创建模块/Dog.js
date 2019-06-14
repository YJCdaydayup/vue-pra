function Dog(name,age) {
    this.name = name;
    this.age = age;
    this.say = function () {
        console.log(this.name + '  ' + this.age);
    }
}

module.exports = Dog;