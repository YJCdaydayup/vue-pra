var Ajax = {
    // 基础选项
    options : {
        method : "get",
        url : "",
        params : {},
        type : 'text', // 返回的内容的类型,text,xml,json
        callback : function() {}
    },

    // 创建XMLHttpRequest对象
    createRequest : function() {
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
        return xmlhttp;
    },
    // 设置基础选项
    setOptions : function(newOptions) {
        for ( var pro in newOptions) {
            this.options[pro] = newOptions[pro];
        }
    },
    // 格式化请求参数
    formateParameters : function() {
        var paramsArray = [];
        var params = this.options.params;
        for ( var pro in params) {
            var paramValue = params[pro];
            paramsArray.push(pro + "=" + paramValue);
        }
        return paramsArray.join("&");
        //key1=val1&key2=val2
    },
    // 状态改变的处理
    readystatechange : function(xmlhttp) {
        var returnValue;
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            switch (this.options.type) {
                case "xml":
                    returnValue = xmlhttp.responseXML;
                    break;
                case "json":
                    var jsonText = xmlhttp.responseText;
                    if(jsonText){
                        returnValue = eval("(" + jsonText + ")");
                    }
                    break;
                default:
                    returnValue = xmlhttp.responseText;
                    break;
            }
            if (returnValue) {
                this.options.callback.call(this, returnValue);
            } else {
                this.options.callback.call(this);
            }
        }
    },
    // 发送Ajax请求
    request : function(options) {
        var ajaxObj = this;
        ajaxObj.setOptions.call(ajaxObj, options);

        var xmlhttp = ajaxObj.createRequest.call(ajaxObj);
        xmlhttp.onreadystatechange = function() {
            ajaxObj.readystatechange.call(ajaxObj, xmlhttp);
        };

        var formateParams = ajaxObj.formateParameters.call(ajaxObj);
        var method = ajaxObj.options.method;
        var url = ajaxObj.options.url;

        if ("GET" === method.toUpperCase()) {
            url += "?" + formateParams;
        }

        xmlhttp.open(method, url, true);
        if ("GET" === method.toUpperCase()) {
            xmlhttp.send(null);
        } else if ("POST" === method.toUpperCase()) {
            xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
            xmlhttp.send(formateParams);
        }
    }
};

//Ajax.request({
//                url:"ajax-07.txt",
//                params:{id:userid},
//                type:'json',
//                callback:process
//            });

//定时触发活动
// var buyer = null;
// //计算事件
// var countTime = null;
// //剩余时间事件
// var leftTimeOut = null;
//
// function startBuy(obj)
// {
//     if (obj.errno == 0) {
//         document.getElementById("item-time").innerHTML = '立即秒杀';
//         document.getElementById("item-time").style.backgroundColor = 'red';
//         document.getElementById("mp-item-link").href = obj.data.url;
//         document.getElementById("item-his-safe").innerHTML = obj.data.token;
//         clearInterval(buyer);
//     }
// }
//
// function start()
// {
//     var iteminfo = document.getElementById('mp-item-link').getAttribute('data-click');
//     var	itemobj = eval("("+ iteminfo + ")");
//     var itemid = itemobj.item;
//     var uid = 888;
//
//     Ajax.request({
//         url:"http://localhost/miao/second.php",
//         params:{id:itemid,userid:uid},
//         type:'json',
//         callback: startBuy
//     });
//
//     buyer = setInterval(start, 1000);
// }
//
// //计算开始时间
// function timer()
// {
//     var data = document.getElementById("mp-item-link").getAttribute('data-click');
//     var obj = eval("(" + data + ")");
//     var target = obj.time;
//
//     var now = parseInt(new Date().valueOf()/1000);
//     var leftime = target - now;
//     if (leftime <= 0) {
//         clearInterval(countTime);
//     }
//     if (null != leftTimeOut ) {
//         clearTimeout(leftTimeOut);
//     }
//     var begin = leftime - 5;
//     if (begin <= 0) {
//         start();
//     } else {
//         begin = begin * 1000;
//         leftTimeOut = setTimeout(start, begin);
//     }
//     html = timeCount(leftime);
//     document.getElementById('item-time').innerHTML = html;
// }
//
// function timeCount(maxtime)
// {
//     var html = '';
//     if (maxtime <=0 ) {
//         return html;
//     }
//     var day = Math.floor(maxtime/86400);
//     leftime = Math.floor(maxtime%86400);
//     var hour = Math.floor(leftime/3600);
//     leftime = Math.floor(leftime%3600);
//     var minute = Math.floor(leftime/60);
//     var second = Math.floor(leftime%60);
//     html = "离开始：";
//     if (day > 0 ) {
//         html += day + '天';
//     }
//     html += hour + '小时';
//     html += minute + '分';
//     html += second + '秒';
//     return html;
// }
//
// // countTime = setInterval(timer, 1000);
//
// var isClick = false;
// function buyItem()
// {
//     var byurl = document.getElementById('mp-item-link').getAttribute('href');
//     var data = document.getElementById('mp-item-link').getAttribute('data-click');
//     var obj = eval("("+data+")")
//     var itemid = obj.item;
//     var bytoken = document.getElementById('item-his-safe').innerHTML;
//     if (!isClick) {
//         isClick = true;
//
//         Ajax.request({
//             url:byurl,
//             params:{token:bytoken,id:itemid},
//             type:'json',
//             callback: buyCallBack
//         });
//     }
// }
//
// function buyCallBack(obj)
// {
//     if (obj.errno == 0) {
//         //	location.href= obj.data.url;
//     }
// }
