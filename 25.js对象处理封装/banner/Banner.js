define(function (require, exports, module) {

    function Banner(elm, options, callback) {
        var me = this;
        me.el = me.checkElm(elm) ? document.getElementById(elm) : null;
        me.callback = me.checkFn(callback) ? callback : function () {
        }
        me.opts = options;
    }

    Banner.prototype.init = function () {
        var me = this;
        setInterval(function () {
            me.move()
        }, me.opts.duration);
    }

    Banner.prototype.move = function () {
        var me = this;
        var bg = document.getElementById('bg');
        var dis = document.getElementsByClassName('banner_item');
        bg.style.left =  400 * dis.length/  bg.offsetLeft +  +20 + 'px';
        console.log(bg)
    }

    Banner.prototype.checkFn = function (fn) {
        if (typeof fn === 'function') {
            return true;
        } else {
            throw 'This callback does not exist.'
        }
    }

    Banner.prototype.checkElm = function (el) {
        if (!!el && document.getElementById(el)) {
            return true;
        } else {
            throw 'This element does not exist.'
        }
    }
    module.exports = Banner;
})