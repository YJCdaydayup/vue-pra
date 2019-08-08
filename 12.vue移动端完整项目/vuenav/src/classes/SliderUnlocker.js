export default class SliderUnlocker {
    constructor(el,options,callback) {
        this.el = this.$(el);
        let opts = {
            tips: '验证通过',
            duration: 500,
            max: document.getElementById('slider-box').clientWidth,
            min: 0,
            sliderWidth: this.el.offsetWidth
        }
        for (var k in options) {
            opts[k] = options[k];
        }
        this.opts = opts;
        this.callback = this.checkFn(callback)?callback:function(){}
        this.index = 0;
        this.initialOffset = 0;
        this.started = false;
        this.finished = false;
    }

    $(el) {
        if (el && typeof el === 'string') {
            return document.getElementById(el); 
        }else {
            throw 'This element does not exist';
        }
    }

    init() {
        var me = this;
        me.el.ontouchstart = (event)=>{
            me.started = true;
            event.preventDefault();
            let e = event || window.event;
            this.initialOffset = e.touches[0].pageX;
        }

        let loggle = (function() {
            let timer;
            return function(fn) {
                if (timer) {
                    return false;
                }
                timer = setTimeout(()=>{
                    clearTimeout(timer);
                    timer = null;
                    !fn?null:fn();
                },500);
            }
        })()

        me.el.ontouchmove = (event)=>{
            if (me.started) {
                let e = event || window.event;
                me.index = e.touches[0].pageX - me.initialOffset;
                loggle(()=>{
                     console.log(me.index);
                })
                me.move();
            }
        }

        me.el.ontouchend = (event)=>{
            if (me.started && !me.finished) {
                me.index = 0;
                me.el.style.transition = 'all 300ms linear';
                me.el.style.left = me.index;
            }
        }
    }

    move() {
        if (this.index + this.opts.sliderWidth+2 >= this.opts.max) {
            this.index = this.opts.max - this.opts.sliderWidth;
            this.started = false;
            this.finished = true;
        }

        if (this.index <= 0) {
            this.started = false;
            this.finished = false;
        }

        if (this.index + this.opts.sliderWidth === this.opts.max && this.finished && this.opts.max > 0) {
            let tips = document.getElementById('tips');
            tips.innerText = this.opts.tips;
            tips.style.color = '#fff';
            this.callback();
        }
        this.updateX();
    }

    updateX() {
        this.el.style.transition = '0ms'
        this.el.style.left = this.index + 'px';
    }

    checkFn(fn) {
        if (typeof fn === 'function') {
            return true;
        }else {
            throw 'This callback does not exist.'
        }
    }
}