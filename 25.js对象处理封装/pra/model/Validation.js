import $ from 'jquery'

export default class Validation {
    constructor(elm, options, success) {
        var $elm = this.checkElm(elm) ? $(elm) : $;
        success = this.checkFn(success) ? success : function () {
        }
        this.elm = $elm;
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
        this.opts = $.extend(opts, options || {});
        this.swipestart = opts.swipestart;
        this.min = opts.min;
        this.max = opts.max;
        this.index = opts.index;
        this.isOK = opts.isOK;
        this.labelWidth = this.elm.find('#label').width();
        this.sliderBg = this.elm.find('#slider_bg');
        this.success = success;
    }

    init() {
        let me = this;
        this.elm.find('#label').on('touchstart', function (event) {
            console.log(event)
            event.preventDefault();
            let e = event || window.event;
            me.labelIndex = e.originalEvent.touches[0].pageX - this.offsetLeft;
            me.handerIn(event);
        }).on('touchmove', function (event) {
            me.handerMove(event)
        }).on('touchend', function () {
            me.handerOut(event);
        })
    }

    handerOut() {
        this.swipestart = false;
        this.index = 0;
        this.reset();
    }

    reset() {
        let me = this;
        me.elm.find('#slider_bg').animate({
            width: me.index + 'px'
        }, me.opts.duration);

        me.elm.find('#label').animate({
            left: me.index + 'px'
        }, me.opts.duration);
    }

    handerMove(event) {
        let me = this;
        if (me.swipestart) {
            let e = event || window.event;
            me.index = e.originalEvent.touches[0].pageX - me.labelIndex;
            me.move();
        }
    }

    move() {
        let me = this;
        if (me.index + me.labelWidth + 2 >= me.max) {
            me.index = me.max - me.labelWidth - 2;
            me.isOK = true;
            me.swipestart = false;
        }

        if (me.index <= 0) {
            me.index = 0;
        }

        if (me.index + me.labelWidth + 2 === me.max && me.max > 0 && me.isOK) {
            me.elm.find('#label').unbind().next("#labelTip").text(me.opts.successLabelTip).css({
                color: '#fff'
            })
            me.success();
        }
        me.updateView();
        console.log(me.index)
    }

    handerIn() {
        this.swipestart = true;
    }

    updateView() {
        let me = this;
        me.elm.find('#slider_bg').css({
            width: me.index + 'px'
        });

        me.elm.find('#label').css({
            left: me.index + 'px'
        });
    }

    checkElm(el) {
        if ($(el).length > 0) {
            return true;
        } else {
            throw 'this element does not exist.'
        }
    }

    checkFn(fn) {
        if (typeof fn === 'function') {
            return true;
        } else {
            throw 'this callback does not exist.'
        }
    }
}