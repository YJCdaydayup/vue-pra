/**
 * Created by yangli on 2019/10/14.
 */
'use strict'

const express = require('express');
const cookieParser = require('cookie-parser');


let app = express();

app.use(cookieParser())

//

app.get('/', (req, res)=> {
    // 这个是设置name，后面的对象是设置cookie的属性
    res.cookie('xihao', 'tfboys', {
        maxAge: 60000, httpOnly: true
    })
    res.send(req.cookies);
});

app.get('/gonglue', (req, res)=> {
    let mudidi = req.query.mudidi;
    let xihaos = req.cookies.mudidi || [];
    xihaos.push(mudidi);
    res.cookie('mudidi',xihaos);
    res.send(mudidi + '旅游攻略')
})

app.listen(3000);