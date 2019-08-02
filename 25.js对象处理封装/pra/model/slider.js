define(function (require, exports, module) {
    function Slider(el, opts, callback) {
        var me = this;
        var $el = me.checkEl(el) ? $(el) : $;
        callback = me.checkFn(callback) ? callback : function () {
        }
        me.el = $el;
        me.callback = callback;
        var options = {
            duration: 0,
            moveX: 0,
            moveY: 0
        }
        options = $.extend(options, opts);
        me.opts = options;
        me.moveX = options.moveX;
        me.moveY = options.moveY;
    }

    Slider.prototype.init = function () {
        var me = this;
        me.el.on('touchstart', function (event) {
            me.moveX = 0;
            me.moveY = 0;
            me.updateView()
        }).on('touchmove',function (event) {
            event.preventDefault();
            var e = event || window.event;
            me.moveX = e.originalEvent.touches[0].pageX;
            me.moveY = e.originalEvent.touches[0].pageY;
            me.updateView()
        }).on('touchend',function () {
            me.moveX = 0;
            me.moveY = 0;
            me.reset();
        })
    }

    Slider.prototype.reset = function () {
        var me = this;
        me.el.animate({
            left: 0,
            top: 0
        },me.opts.duration);
    }

    Slider.prototype.updateView = function () {
        var me = this;
        me.el.animate({
            left: me.moveX + 'px',
            top: me.moveY + 'px'
        }, 0);

        me.el.text(JSON.stringify({
            x: me.el[0].offsetLeft,
            y: me.el[0].offsetTop
        }))
    }

    Slider.prototype.checkEl = function (el) {
        if ($(el).length > 0) {
            return true;
        } else {
            throw  'this element does not exist.';
        }
    }

    Slider.prototype.checkFn = function (fn) {
        if (typeof fn === 'function') {
            return true;
        } else {
            throw 'this callback does not exits.'
        }
    }
    module.exports = Slider;
})