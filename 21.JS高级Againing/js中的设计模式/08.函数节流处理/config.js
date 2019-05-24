var getInstance = (function () {
    var __instance;

    function Instance(name,age) {
        this.name = name;
        this.age = age;
    }

    return function (name, age) {
        if (__instance) {
            return __instance;
        }
        __instance = new Instance(name, age);
        return __instance;
    }
})()

instace = {
    name: '123',
    age: 10
};
