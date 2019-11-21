function AjaxHandler(options) {
    this.opts = {
        method: "get",
        url: "",
        params: {},
        type: 'text', // 返回的内容的类型,text,xml,json
        callback: function () {
        }
    }
    for (var key in options) {
        this.opts[key] = options[key] || this.opts[key];
    }
    this.httpObject = null;
    this.paramstr = '';
    this.formateParameters();
    this.createRequest();
}

AjaxHandler.prototype.formateParameters = function () {
    var paramsArr = [];
    for (var key in this.opts.params) {
        paramsArr.push(key + '=' + this.opts.params[key]);
    }
    this.paramstr = paramsArr.join('&')
}

AjaxHandler.prototype.createRequest = function () {
    var xmlhttp;
    try {
        xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
        try {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {
            try {
                xmlhttp = new XMLHttpRequest();
                if (xmlhttp.overrideMimeType) {
                    xmlhttp.overrideMimeType("text/xml");
                }
            } catch (e) {
                alert("您的浏览器不支持Ajax");
            }
        }
    }
    this.httpObject = xmlhttp;
}

AjaxHandler.prototype.readystatechange = function () {
    var returnValue;
    if (this.httpObject.readyState == 4 && this.httpObject.status == 200) {
        switch (this.opts.type) {
            case "xml":
                returnValue = this.httpObject.responseXML;
                break;
            case "json":
                var jsonText = this.httpObject.responseText;
                if (jsonText) {
                    returnValue = eval("(" + jsonText + ")");
                }
                break;
            default:
                returnValue = this.httpObject.responseText;
                break;
        }
        if (returnValue) {
            this.opts.callback(returnValue);
        } else {
            this.opts.callback();
        }
    }
}
// 发送Ajax请求
AjaxHandler.prototype.request = function () {
    var me = this;
    this.httpObject.onreadystatechange = function () {
        me.readystatechange();
    };
    var method = this.opts.method;
    var url = this.opts.url;
    if ("GET" === method.toUpperCase()) {
        url += "?" + this.paramstr;
    }

    this.httpObject.open(method, url, true);
    if ("GET" === method.toUpperCase()) {
        this.httpObject.send(null);
    } else if ("POST" === method.toUpperCase()) {
        this.httpObject.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        this.httpObject.send(this.paramstr);
    }
}

AjaxHandler.request = function (options) {
    var httpobj = new AjaxHandler(options);
    httpobj.request();
}