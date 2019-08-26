#!/usr/bin/env node

const fs = require("fs");

let htmlString = "<!DOCTYPE html>\n" +
    "<html lang=\"en\">\n" +
    "<head>\n" +
    "    <meta charset=\"UTF-8\">\n" +
    "    <title>Title</title>\n" +
    "</head>\n" +
    "<body>\n" +
    "</body>\n" +
    "</html>\n";

let stats;
let size;
try {
    stats = fs.statSync('./index.html');
    size = stats.size;
    console.log('文件已存在');
} catch (err) {
    fs.writeFile('index.html', htmlString, 'utf8', function (error) {
        if (error) {
            console.log(error);
            return false;
        }
        console.log('写入成功');
    })
}


