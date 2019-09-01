/**
 * Created by yangli on 2019/9/1.
 */

const express = require('express');

let app = express();

// 这就是启动模版引擎
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('form',{name: 'Sara'});
})

app.post('/', function (req, res) {
    res.send('success');
})

app.listen(3000)
