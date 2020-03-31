function timer() {
    var datetimer = document.getElementById('timer').getAttribute('date-timer')
    var dateObj = eval('(' + datetimer + ')');
    var time = dateObj.time;
    var now = Math.floor(new Date().valueOf() / 1000);
    var lefttime = time - now;
    var html = timeCount(lefttime);
    document.getElementById('timer').innerText = html;
}

function timeCount(maxtime) {
    var html = '离开始： ';
    if (maxtime < 0) {
        clearInterval(timeing);
        return;
    }

    var day = Math.floor(maxtime / 86400);
    var lefttime = Math.floor(maxtime % 86400);
    var hour = Math.floor(lefttime / 3600);
    lefttime = Math.floor(lefttime % 3600);
    var minite = Math.floor(lefttime / 60);
    lefttime = Math.floor(lefttime % 60);
    var second = lefttime;
    if (day > 0) {
        html += day + '天'
    }
    html += hour + '小时'
    html += minite + '分'
    html += second + '秒'
    return html;
}

// timeing = setInterval(timer,1000)



function MyTimer(id, options) {
    var opts = {
        duration: 1000
    }
    for (var key in options) {
        opts[key] = options[key];
    }
    this.el = this.$(id);
    this.opts = opts;
    this.init__();
}

MyTimer.prototype.init__ = function() {
    var me = this;
    this.timer = setInterval(function() {
        me.timerAction();
    }, me.opts.duration); 
}

MyTimer.prototype.$ = function(el) {
    if (typeof el === 'string' && el.length > 0) {
        return document.getElementById(el);
    }
    console.log('查找的id格式错误！！！');
}

MyTimer.prototype.timerAction = function() {
     var datetimer = this.el.getAttribute('date-timer')
     var dateObj = eval('(' + datetimer + ')');
     var time = dateObj.time;
     var now = Math.floor(new Date().valueOf() / 1000);
     var lefttime = time - now;
     var html = this.timeCount(lefttime);
     this.el.innerText = html;
}

MyTimer.prototype.timeCount = function (maxtime) {
     var html = '离开始： ';
     if (maxtime <= 0) {
       clearInterval(this.timer);
       return  '开始活动';
     }

     var day = Math.floor(maxtime / 86400);
     var lefttime = Math.floor(maxtime % 86400);
     var hour = Math.floor(lefttime / 3600);
     lefttime = Math.floor(lefttime % 3600);
     var minite = Math.floor(lefttime / 60);
     lefttime = Math.floor(lefttime % 60);
     var second = lefttime;
     if (day > 0) {
       html += day + '天'
     }
     html += hour + '小时'
     html += minite + '分'
     html += second + '秒'
     return html;
}


new MyTimer('timer',{
    duration: 1000
})
