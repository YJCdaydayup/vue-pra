/**
 * Created by yangli on 2019/9/1.
 */


const express = require('express');

let app = express();

let a = 100;

app.get('/', function (req, res,next) {
    a ++;
    console.log(1)
    // res.send('123')
    next();
    // res.send(a.toString());
})

app.get('/', function (req, res) {
    a ++;
    console.log(2)
    res.send(a.toString());
})


app.listen(3000)