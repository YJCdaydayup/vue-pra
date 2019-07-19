define(function (require, exports, module) {
    function SliderUnlock(elm, options, success) {
        var me = this;
        var $elm = me.checkElm(elm) ? $(elm) : $;
        success = me.checkFn(success) ? success : function () {
        }
        me.elm = $elm;
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
        me.opts = $.extend(opts, options || {});
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
        me.elm.find('#label').on('mousedown', function (event) {
            me.handerIn();
            var e = event || window.event;
            me.labelIndex = e.screenX - this.offsetLeft;
        }).on('mousemove', function (event) {
            me.handerMove(event);
        }).on('mouseup', function () {
            me.handerOut()
        }).on('mouseout', function () {
            me.handerOut()
        }).on('touchstart',function (event) {
            me.handerIn()
            var e = event || window.event;
            me.labelIndex = e.originalEvent.touches[0].pageX - this.offsetLeft;
        }).on('touchmove',function (event) {
            me.handerMove(event,'mobile')
        }).on('touchend',function () {
            me.handerOut()
        })
    }

    SliderUnlock.prototype.handerOut = function () {
        var me = this;
        me.index = 0;
        me.reset();
    }

    SliderUnlock.prototype.reset = function () {
        var me = this;
        me.swipestart = false;
        me.elm.find('#label_bg').animate({
            width: me.index + 'px'
        }, me.opts.duration);
        me.elm.find("#label").animate({
            left: me.index + 'px'
        },me.opts.duration)
    }

    SliderUnlock.prototype.handerMove = function (event, type) {
        var me = this;
        if (me.swipestart) {
            event.preventDefault();
            var e = event || window.event;
            if (type === 'mobile') {
                me.index = e.originalEvent.touches[0].pageX - me.labelIndex;
            } else {
                me.index = e.screenX - me.labelIndex;
            }
            me.move();
        }
    }

    SliderUnlock.prototype.move = function () {
        var me = this;
        if (me.index + me.labelWidth + 2 >= me.max) {
            me.index = me.max - me.labelWidth - 2;
            me.isOK = true;
            me.swipestart = false;
        }

        if (me.index <= 0) {
            me.index = 0;
        }

        if (me.index + me.labelWidth + 2 === me.max && me.isOK) {
            me.elm.find('#label').unbind().next('#labelTip').text(me.opts.successLabelTip).css({
                color: '#fff'
            })
            me.success()
        }
        me.updateView();
    }

    SliderUnlock.prototype.handerIn = function (event, type) {
        var me = this;
        me.swipestart = true;
    }

    SliderUnlock.prototype.updateView = function () {
        var me = this;
        me.elm.find("#slider_bg").animate({
            width: me.index + 'px'
        }, 0);
        me.elm.find('#label').animate({
            left: me.index + 'px'
        }, 0)
    }


    SliderUnlock.prototype.checkElm = function (elm) {
        if ($(elm).length > 0) {
            return true;
        } else {
            throw 'this element does not exit.'
        }
    }

    SliderUnlock.prototype.checkFn = function (fn) {
        if (typeof fn === 'function') {
            return true;
        } else {
            throw 'this callback does not exist.';
        }
    }

    module.exports = SliderUnlock;
})