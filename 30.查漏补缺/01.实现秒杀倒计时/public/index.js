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

timeing = setInterval(timer,1000)

