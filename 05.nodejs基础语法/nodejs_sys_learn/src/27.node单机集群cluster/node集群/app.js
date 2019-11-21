const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');
const cluster = require('cluster');
//路由表
var routeArr = {};
//进程列表
var workers = {};
//进程数量
var clusterNum;
//解析请求地址
var getPathName = function(reqUrl) {
    var urlParse = getUrlParse(reqUrl);
    return urlParse.pathname;
};
//获取url解析
var getUrlParse = function(reqUrl) {
    return url.parse(reqUrl);
};
//是否是一个请求
var isFunc = function(pathName) {
    return typeof routeArr[pathName] === 'function';
};
/**静态资源处理 param(req:请求,res:响应,pathName:路径) */
var resStatic = function(req, res, pathName) {
    fs.readFile(pathName.substr(1), function(err, data) {
        err ? endErrorReq(res, 501) : endStaticReq(res, pathName, data);
        res.end();
    });
};
//响应静态资源
var endStaticReq = function(res, pathName, data) {
    var suffix = path.extname(pathName);
    res.writeHead(200, { 'Content-Type': suffix === ".css" ? 'text/css' : 'text/html;' + 'charset=utf-8' });
    res.write(data);
};
//结束错误请求
var endErrorReq = function(res, err) {
    res.writeHead(err);
    res.end();
};
/** 路由分发处理器 */
var routeHandler = function(req, res) {
    // var pathName = getPathName(req.url);
    // isFunc(pathName) ? routeArr[pathName](req, res, pathName) : resStatic(req, res, pathName);
    console.log("处理了一个请求：" + url.parse(req.url).pathname);
};
/** 添加动态路由解析
 * param{
 * reqUrl:请求地址,
 * service:function(request:请求,response:响应,pathName:请求名)}
 */
var addDynamicRoute = function(reqUrl, service) {
    console.log("添加的服务名：" + reqUrl);
    routeArr[reqUrl] = service;
};
/**  开启服务器并监听端口  param{port:端口号}*/
var startServer = function(port, num) {
    clusterNum = num;
    if (num) {
        startClusterSever(port, num);
    } else {
        //创建服务器
        http.createServer(function(req, res) {
            routeHandler(req, res);
        }).listen(port); //注意这里的端口改成了变量
        //开启后在控制台显示该服务正在运行
        console.log('Server running at http://127.0.0.1:' + port);
    }
};
/** 设置静态页面请求别名 param(newUrl:新的请求路径, oldUrl:原始路径) */
var setIndex = function(newUrl, oldUrl) {
    addDynamicRoute(newUrl, function(req, res) {
        resStatic(req, res, oldUrl);
    });
};
/**自定义静态页面处理方式 staticHandlerService=function(req,res,pathName)*/
var setresStaticFunc = function(staticHandlerService) {
    resStatic = staticHandlerService;
};

//开启集群服务
var startClusterSever = function(port, numCPUs) {
    if (cluster.isMaster) {
        console.log('是主进程')
        for (var i = 0; i < numCPUs; i++) {
            const work = cluster.fork();
            console.log(work.process.pid);
            workers[i] = work;
        }
        cluster.on('exit', (worker, code, signal) => {
            console.log(`worker ${worker.process.pid} died`);
        });
    } else {
        console.log('ABC'+ cluster.worker.id);
        http.createServer((req, res) => {
            console.log("子进程:" + cluster.worker.id + "正在处理请求...");
            routeHandler(req, res);
        }).listen(port);

    }
}

startServer(3000,2)