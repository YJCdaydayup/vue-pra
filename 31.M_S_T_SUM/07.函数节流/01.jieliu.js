function throttle(fn, delay) {
    var lastTime = 0;
    return function () {
        var nowTime = Date.now();
        if (nowTime - lastTime > delay) {
            fn()
            lastTime = nowTime;
        }
    }
}

function again(fn, delay) {
    var timer;
    return function () {
        if (timer) {
            return;
        }
        timer = setTimeout(function () {
            fn()
            clearTimeout(timer);
        }, delay);
    }
}

function debounce(fn, delay) {
    var timer = null;
    return function () {
        clearTimeout(timer);
        timer = setTimeout(function () {
            fn.apply(this);
        },delay)
    }
}


function toggle(fn, duration) {
    let timer
    return function() {
        clearTimeout(timer)
        timer = setTimeout(fn, duration)
    }
}