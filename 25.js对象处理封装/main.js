(function ($, window, document, undefined) {
    function SliderUnlock(elm, options, success) {
        var me = this;
        var $elm = me.checkElm(elm) ? $(elm) : $;
        success = me.checkFn(success) ? success : function () {
        }
        // 默认参数
        var opts = {
            successLabelTip: 'Successfully Verified',
            duration: 200,
            swipestart: false,
            min: 0,
            max: $elm.width(),
            index: 0,
            isOK: false,
            labelIndex: 0
        }
        // 将参数给到默认参数对象
        opts = $.extend(opts, options || {});
        me.elm = $elm;
        me.opts = opts;
        me.swipestart = opts.swipestart;
        me.min = opts.min;
        me.max = opts.max;
        me.index = opts.index;
        me.isOK = opts.isOK;
        me.labelWidth = me.elm.find('#label').width();
        me.sliderBg = me.elm.find('#slider_bg');
        me.success = success;
    }

    SliderUnlock.prototype.init = function () {
        var me = this;
        me.updateView();
        // 针对浏览器的mousedown mousemove
        me.elm.find('#label').on('mousedown', function (event) {
            // 点击位关键点:
            // e.clientX 点击位相对于浏览器窗口 类似于移动端的e.originalEvent.touches[0].pageX
            // this.offsetLeft 点击位相对于自己距离
            var e = event || window.event;
            me.labelIndex = e.clientX - this.offsetLeft;
            me.handerIn();
        }).on('mousemove', function (event) {
            me.handerMove(event);
        }).on("mouseup", function (event) {
            me.handerOut();
        }).on('mouseout',function (event) {
            me.handerOut()
        }).on('touchstart', function (event) {
            var e = event || window.event;
            me.labelIndex = e.originalEvent.touches[0].pageX - this.offsetLeft;
            me.handerIn();
        }).on('touchmove',function (event) {
            me.handerMove(event,'mobile')
        }).on('touchend',function (event) {
            me.handerOut()
        })
    }

    SliderUnlock.prototype.handerOut = function () {
        var me = this;
        me.swipestart = false;
        if (me.index < me.max) {
            me.reset();
        }
    }

    SliderUnlock.prototype.reset = function () {
        var me = this;
        me.index = 0;
        me.sliderBg.animate({
            width: 0
        },me.opts.duration);
        me.elm.find('#label').animate({
            left: me.index + 'px'
        },me.opts.duration).next('#labelTip').animate({
            opacity: 1
        },me.opts.duration);
        me.updateView();
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
        if ((me.index + me.labelWidth) >= me.max) {
            me.index = me.max - me.labelWidth - 2;
            me.swipestart = false;
            me.isOK = true;
        }

        if (me.index < 0) {
            me.index = me.min;
            me.isOK = false;
        }

        if ((me.index + me.labelWidth + 2 === me.max) && me.max > 0 && me.isOK) {
            $("#label").unbind().next("#labelTip").text(me.opts.successLabelTip).css({
                color: '#fff'
            })
            me.success();
        }
        me.updateView();
    }

    SliderUnlock.prototype.handerIn = function () {
        var me = this;
        me.swipestart = true;
        me.min = 0;
        me.max = me.elm.width();
    }

    SliderUnlock.prototype.updateView = function () {
        var me = this;
        me.sliderBg.animate({
            width: me.index
        }, 0);
        me.elm.find('#label').animate({
            left: me.index + 'px'
        }, 0);
    }

    SliderUnlock.prototype.checkElm = function (elm) {
        if ($(elm).length > 0) {
            return true;
        } else {
            throw "this element does not exit."
        }
    }

    SliderUnlock.prototype.checkFn = function (fn) {
        if (typeof fn === 'function') {
            return true;
        } else {
            throw "the param is not a function."
        }
    }

    window['SliderUnlock'] = SliderUnlock;

})(jQuery, window, document);

$(function () {
    var slider = new SliderUnlock('#slider', {
        successLabelTip: '验证成功'
    }, function () {
        alert('验证成功');
    });
    slider.init();
})