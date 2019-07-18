define(function (require, exports, module) {
    /**
     * 给子元素添加点击事件
     * @param parent
     * @param tagName
     * @param callback
     */
    function addClickEventForChildTag(parent, tagName, callback) {
        var tags = parent.getElementsByTagName(tagName);
        // tags.constructor.prototype.forEach = Array.prototype.forEach;
        // tags.forEach(function (child, i) {
        //
        // })
        console.log(tags);
        Array.prototype.forEach.call(tags,function (child,i) {
            // if (child.parentNode === parent) {
                child.onclick = function () {
                    if (callback) {
                        callback(tags, this, i);
                    }
                }
            // }
        })
    }

    function $(id) {
        return typeof id === 'string' ? document.getElementById(id) : null;
    }

    exports.addClickEventForChildTag = addClickEventForChildTag;
    exports.$ = $;
})
