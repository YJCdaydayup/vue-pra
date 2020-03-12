/**
 * 动态加载js
 */
function loadJs(url,callback) {
    var script = document.createElement("script");
    script.setAttribute("type", "text/javascript");
    script.onload = function (data) {
        !callback ?null: callback()
    }
    script.setAttribute("src", url);
    document.body.appendChild(script)
}

/**
 * 动态按顺序加载
 */
function loadJsInOrder(arr) {
    (function iterator(i) {
        if (i === arr.length) {
            return false
        }
        var url = arr[i]
        loadJs(url, function() {
            iterator(i + 1)
        })
    })(0)
}

/**
 * 动态下载js
 */
function downloadJs(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onload = function () {
        if (this.status == 200) {
            !callback ? null : callback(url, this.responseText)
        }
    };
    xhr.send();
}

/**
 * 按顺序下载js
 */
function downloadJsInOrder(arr) {
    (function iterator(i) {
        if (i === arr.length) {
            return false
        }
        downloadJs(arr[i],function(url, data) {
            localStorage.setItem(url, data)
            iterator(i + 1)
        })
    })(0)
}




