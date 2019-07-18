(function ($, window, document) {
    var SliderUnlock = function (elem, options, success) {
        var me = this;
        var $elem = me.checkElm(elem) ? $(elem) : $;
        success = me.checkFn(success) ? success : function () {
        }
        var opts = {
            successLabelTip: 'Successfully Verified',
            duration: 200,
            swipestart: false,
            min: 0,
            max: $elem.width(),
            index: 0,
            isOK: false,
            labelIndex: 0
        }
        me.elem = $elem;
        me.opts = $.extend(opts, options || {});
        me.swipestart = opts.swipestart;
        me.min = opts.min;
        me.max = opts.max;
        me.index = opts.index;
        me.isOK = opts.isOK;
        me.labelWidth = me.elem.find('#label').width();
        me.sliderBg = me.elem.find('#slider_bg');
        me.success = success;
    }

    SliderUnlock.prototype.init = function () {
        var me = this;
        me.updateView();
        me.elem.find("#label").on('mousedown', function (event) {
            var e = event || window.event;
            me.labelIndex = e.clientX - this.offsetLeft;
            me.handerIn(event);
        }).on('mousemove', function (event) {
            me.handerMove(event);
        }).on('mouseup', function (event) {
            me.handerOut(event);
        }).on('mouseout', function (event) {
            me.handerOut(event)
        }).on('touchstart', function (event) {
            var e = event || window.event;
            me.labelIndex = e.originalEvent.touches[0].pageX - this.offsetLeft;
            me.handerIn(event)
        }).on('touchmove', function (event) {
            me.handerMove(event, 'mobile');
        }).on('touchend', function (event) {
            me.handerOut()
        })
    }

    SliderUnlock.prototype.handerOut = function (event) {
        var me = this;
        me.swipestart = false;
        if (me.index < me.max - me.labelWidth - 2) {
            me.index = 0;
            me.reset();
        }
    }

    SliderUnlock.prototype.reset = function () {
        var me = this;
        me.elem.find('#label').animate({
            left: me.index + 'px'
        }, me.opts.duration);
        me.elem.find('#slider_bg').animate({
            width: me.index + 'px'
        }, me.opts.duration);
    }

    SliderUnlock.prototype.handerMove = function (event, type) {
        var me = this;
        if (me.swipestart) {
            event.preventDefault();
            event = event || window.event;
            if (type === 'mobile') {
                me.index = event.originalEvent.touches[0].pageX - me.labelIndex;
            } else {
                me.index = event.clientX - me.labelIndex;
            }
            me.move();
        }
    }

    SliderUnlock.prototype.move = function () {
        var me = this;
        if (me.index + me.labelWidth > me.max) {
            me.index = me.max - me.labelWidth - 2;
            me.swipestart = false;
            me.isOK = true;
        }

        if (me.index < 0) {
            me.index = me.min;
        }

        if (me.index + me.labelWidth + 2 === me.max && me.isOK && me.max > 0) {
            me.elem.find("#labelTip").text(me.successLabelTip).css({
                color: '#fff'
            })
            me.success();
        }
        me.updateView();
    }

    SliderUnlock.prototype.handerIn = function (event) {
        var me = this;
        me.swipestart = true;
        me.min = 0;
    }

    SliderUnlock.prototype.updateView = function () {
        var me = this;
        me.elem.find("#slider_bg").animate({
            width: me.index + 'px'
        }, 0);
        me.elem.find("#label").animate({
            left: me.index + 'px'
        }, 0);
    }

    SliderUnlock.prototype.checkElm = function (elem) {
        if ($(elem).length > 0) {
            return true;
        } else {
            throw "this element is nil."
        }
    }

    SliderUnlock.prototype.checkFn = function (fn) {
        if (typeof fn === 'function') {
            return true;
        } else {
            throw 'this callback does not exits.'
        }
    }

    window['SliderUnlock'] = SliderUnlock;

})(jQuery, window, document);

$(function () {
    var sliderlock = new SliderUnlock("#slider", {
        successLabelTip: '验证成功'
    }, function () {
        alert('验证完成')
    });
    sliderlock.init();
})