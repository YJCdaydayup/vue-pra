var fs = require('fs');

function Module() {
    this.exports = {};
}

function MyRequire(path) {
    var moduleObjText = fs.readFileSync(path,'utf8');
    moduleObjText = '(function moduleContext(exports,module) {' + moduleObjText  + ' return module.exports})';
    var moduleObjFn = eval(moduleObjText);
    var module = new Module()
    var Modules = moduleObjFn(module.exports,module);
    return Modules
}

module.exports = MyRequire;

