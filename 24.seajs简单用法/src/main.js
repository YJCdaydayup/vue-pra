define(function (require,exports,module) {
    var expand = require('./expand/expand')
    function changeSelected(el,tag,callback) {
       expand.addClickEventForChildTag(el,tag,callback);
    }
    function $(id) {
        return expand.$(id);
    }
    var obj = {}
    obj.changeSelected = changeSelected;
    obj.$ = $;
    module.exports = obj;
})
