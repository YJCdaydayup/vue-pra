'use strict'

const http = require('http');
const path = require('path');
const url = require('url');
const fs = require('fs');

const superagent = require('superagent');
const cheerio = require('cheerio');


superagent.get('http://www.baidu.com').end((err, res) => {
    if (err) {
        throw err;
    }
    let content = res.text;
    let $ = cheerio.load(content);
    let result = [];

    let x = $('#s_tab').html()
    console.log(x);
    let children = $('#s_tab').children('.s_tab_inner').find('a');
    console.log(children[8].attribs.href);




    // $(".job-list li .job-primary").each((index,value)=>{
    //     //地址和类型为一行显示，需要用到字符串截取
    //     //地址
    //     let address=$(value).find(".info-primary").children().eq(1).html();
    //     //类型
    //     let type=$(value).find(".info-company p").html();
    //     //解码
    //     address=unescape(address.replace(/&#x/g,'%u').replace(/;/g,''));
    //     type=unescape(type.replace(/&#x/g,'%u').replace(/;/g,''))
    //     //字符串截取
    //     let addressArr=address.split('<em class="vline"></em>');
    //     let typeArr=type.split('<em class="vline"></em>');
    //     //将获取的数据以对象的形式添加到数组中
    //     result.push({
    //         title:$(value).find(".name .job-title").text(),
    //         money:$(value).find(".name .red").text(),
    //         address:addressArr,
    //         company:$(value).find(".info-company a").text(),
    //         type:typeArr,
    //         position:$(value).find(".info-publis .name").text(),
    //         txImg:$(value).find(".info-publis img").attr("src"),
    //         time:$(value).find(".info-publis p").text()
    //     });
    //     console.log(typeof $(value).find(".info-primary").children().eq(1).html());
    // });
    //将数组转换成字符串
    // result=JSON.stringify(result);
    // //将数组输出到json文件里  刷新目录 即可看到当前文件夹多出一个boss.json文件(打开boss.json文件，ctrl+A全选之后 ctrl+K，再Ctrl+F即可将json文件自动排版)
    // fs.writeFile("./boss.json",result,"utf-8",(error)=>{
    //     //监听错误，如正常输出，则打印null
    //     if(error==null){
    //         console.log("恭喜您，数据爬取成功!请打开json文件，先Ctrl+A，再Ctrl+K,最后Ctrl+F格式化后查看json文件(仅限Visual Studio Code编辑器)");
    //     }
    // });
});