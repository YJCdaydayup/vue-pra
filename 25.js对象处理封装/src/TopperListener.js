(function (window,document) {
    function Topper(elm, callback) {
        var me = this;
        this.elm = me.checkElm(elm) ? document.getElementById(elm) : null;
        this.callback = me.checkFn(callback) ? callback : function () {
        }
        this.offsetTop = 0;
        me.start()
    }

    Topper.prototype.start = function () {
        var me = this;
        me.elm.addEventListener('mousewheel', function (e) {
            if (document.documentElement && document.documentElement.scrollTop) { // Explorer 6 Strict
                me.offsetTop = document.documentElement.scrollTop;

            } else if (document.body) {// all other Explorers
                me.offsetTop = document.body.scrollTop;
            }
            me.closureOutput.bind(me)();
        })
    }

    Function.prototype.bind = function (me) {
        var __self = this;
        return function () {
            __self.apply(me, arguments);
        }
    }

    Topper.output = function (fn) {
        var timer;
        return function () {
            var me = this;
            if (timer) {
                return false;
            }
            timer = setTimeout(function () {
                clearTimeout(timer);
                timer = null;
                fn.apply(me, arguments)
            }, 500);
        }
    }

    Topper.prototype.closureOutput = Topper.output(function () {
        this.callback(this.offsetTop);
    })

    Topper.prototype.checkFn = function (fn) {
        if (typeof fn === 'function') {
            return true;
        } else {
            throw 'This callback is not exist.'
        }
    }

    Topper.prototype.checkElm = function (el) {
        if (typeof el === 'string' && document.getElementById(el)) {
            return true;
        } else {
            throw 'This element does not exist.'
        }
    }

    window.Topper = Topper;

})(window, document);

new Topper('container', function (res) {
    console.log(res)
});