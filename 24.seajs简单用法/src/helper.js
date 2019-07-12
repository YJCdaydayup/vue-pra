define(function (require, exports, module) {
    function getHelper() {
        return 'hepler';
    }

    var obj = {}
    obj.getHelper = getHelper;
    return obj
});
