function Floater(dom) {
    var me = this;
    //图片初始的位置
    me.x = 50;
    me.y = 60;
    //x轴的控制器
    me.x_in = true;
    //y轴的控制器
    me.y_in = true;
    //设置一个步长，值越大移动越快
    me.step = 100;
    //设置函数运行周期的时间
    me.delay = 10;
    me.el = me.getEl(dom)
}

Floater.prototype.getEl = function (el) {
    if (typeof el === 'string' && !!document.getElementById(el)) {
        return document.getElementById(el);
    } else {
        throw 'This element does not exist.'
    }
}

Floater.prototype.init = function () {
    var me = this;
    //setInterval按周期运行函数(以毫秒记)
    me.timer = setInterval(function () {
        me.float();
    }, me.delay)
    //鼠标移动事件，当鼠标移动到对象上时触发
    me.el.onmouseover = function () {
        //取消setInterval设置的值
        clearInterval(me.timer)
    }
    //鼠标移动事件，当鼠标移出对象时触发
    me.el.onmouseout = function () {
        me.timer = setInterval(function () {
            me.float();
        }, me.delay)
    }
}

Floater.prototype.float = function () {
    var me = this;
    //实现浮动的函数
    //左边头部设置为0
    var L = T = 0
    //移动层的右边界   页面可视层 - 元素的宽度
    var R = document.body.clientWidth - me.el.offsetWidth
    //移动层的下边界
    var B = document.body.clientHeight - me.el.offsetHeight
    //更新x的值
    me.el.style.left = me.x
    //更新y的值
    me.el.style.top = me.y
    //x为图片的x轴，如果x_in为true表示在视野内，图片向前移动，如果为false表示越界图片往回移动
    me.x = me.x + me.step * ( me.x_in ? 1 : -1)
    if (me.x < L) {
        me.x_in = true
        me.x = L
    }
    if (me.x > R) {
        me.x_in = false
        me.x = R
    }
    me.y = me.y + me.step * ( me.y_in ? 1 : -1)
    if (me.y < T) {
        me.y_in = true
        me.y = T
    }
    if (me.y > B) {
        me.y_in = false
        me.y = B
    }
}
module.exports = Floater