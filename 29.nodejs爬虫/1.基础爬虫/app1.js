var https = require('https');
var http = require('http');
var fs = require('fs');
var request = require('request');
let startPage = 0;//从哪一页开始爬
let page = startPage;
let endPage = 1;//爬到哪一页
//初始请求地址
var url = 'https://www.toutiao.com/search_content/?offset=' + startPage * 20 + '&format=json&keyword=%E8%A1%97%E6%8B%8D&autoload=true&count=20&cur_tab=3&from=gallery'
var i = 0;
//用来判断存储还是访问
var temp = 0;
//存储首页url
urlList = [];

//封装了一层函数
function fetchPage(x) {
    setTimeout(function () {
        startRequest(x);
    }, 2000)
}

//首先存储要访问界面的url
function getUrl(x) {
    temp++;
    https.get(x, function (res) {
        var html = '';
        res.setEncoding('binary');
        res.on('data', function (chunk) {
            html += chunk;
        });
        res.on('end', function () {
            html = JSON.parse(html);//由于获取到的数据是JSON格式的，所以需要JSON.parse方法浅解析
            console.log(html)
            for (let i of html.data) {
                var obj1 = {title: i.title, url: i.article_url};
                urlList.push(obj1)
            }
            console.log(urlList)
            page++;
            if (page <= endPage) {
                let tempUrl = 'https://www.toutiao.com/search_content/?offset=' + page * 20 + '&format=json&keyword=%E8%A1%97%E6%8B%8D&autoload=true&count=20&cur_tab=3&from=gallery';
                getUrl(tempUrl);
            } else {
                fetchPage(urlList.shift());
            }

        })

    }).on('error', function (err) {
        console.log(err);
    });

}


function startRequest(x) {
    console.log('x', x);
    if (temp === 0) {
        getUrl(x);
    } else {
        //采用http模块向服务器发起一次get请求,截取的字符串为文章链接地址
        x.url = 'https://www.' + x.url.substring(7, 19) + 'a' + x.url.substring(25);
        setTimeout(function () {
            https.get(x.url, function (res) {
                var html = '';        //用来存储请求网页的整个html内容
                res.setEncoding('binary');
                //监听data事件，每次取一块数据
                res.on('data', function (chunk) {
                    html += chunk;
                });
                //监听end事件，如果整个网页内容的html都获取完毕，就执行回调函数
                res.on('end', function () {
                    var news_item = {
                        //获取文章的标题
                        title: x.title,
                        //i是用来判断获取了多少篇文章
                        i: i = i + 1,
                    };
                    console.log(news_item);     //打印信息
                    //用来匹配script中的图片链接
                    let reg = /http\:\\\/\\\/p\d\.pstatp\.com\\\/origin(\\\/pgc\-image)?\\\/[A-Za-z0-9]+/g;

                    let imageList = [];

                    imageList = html.match(reg);

                    savedImg(imageList, x.title);
                    //如果没访问完继续访问
                    if (urlList.length != 0) {
                        fetchPage(urlList.shift());
                    }

                });

            }).on('error', function (err) {
                console.log(err);
            });
        }, 2000)
    }
}

function savedImg(imageList, title) {
    fs.mkdir('./image/' + title, function (err) {
        if (err) {
            console.log(err)
        }
    });
    imageList.forEach(function (item, index) {
        var img_title = index;//给每张图片附加一个编号
        var img_filename = img_title + '.jpg';
        //图片的url需要转换一下
        var img_src = 'http://' + item.substring(9); //获取图片的url
        //采用request模块，向服务器发起一次请求，获取图片资源
        request({uri: img_src, encoding: 'binary'}, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                fs.writeFile('./image/' + title + '/' + img_filename, body, 'binary', function (err) {
                    if (err) {
                        console.log(err)
                    }
                });
            }
        })
    })
}

fetchPage(url);