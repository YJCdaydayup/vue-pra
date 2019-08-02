var fs = require('fs');

function Module() {
    this.exports = {};
}

function MyRequire(path) {
    var moduleObjText = fs.readFileSync(path, 'utf8');
    moduleObjText = '(function moduleContext(exports,module) {' + moduleObjText + ' return module.exports})';
    var moduleObjFn = eval(moduleObjText);
    var module = new Module()
    var Modules = moduleObjFn(module.exports, module);
    console.log(moduleObjText)
    return Modules
}


module.exports = MyRequire;

function moduleContext(exports, module) {
    function Test(name, age) {
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
    return module.exports
}
