'use strict'

const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const ejs = require('ejs');

let app = express();

app.use(express.static('./public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser('key'));

app.set('views', path.join(__dirname, 'template'));
app.set('view engine', 'html');

app.all('/', (req, res) => {
    app.set('title', 'TITLE');
    res.send('ok');
})

app.all('/t', (req, res) => {
    res.send(app.get('title'));
})

app.get('/getCookie', (req, res) => {
    let {signedCookies} = req;
    res.send(signedCookies || "cookie 为空");
})

app.get('/setCookie', (req, res) => {
    console.log('cookie', req.signedCookies.a);
    res.cookie('a', 'Sara', {signed: true});
    res.cookie('b', 'JEFF', {signed: true});
    res.clearCookie('b');
    res.send('cookie设置完成');
})

app.engine('html', require('ejs').__express);

app.get('/test', (req, res) => {
    res.render('index', {
        name: 'Sara'
    })
})

app.get('/setting', (req, res) => {
    res.set('X-MEI', 'yjc');
    // res.status(200);

    // res.redirect(301, 'apple developer');

    res.redirect('back');

    res.end();
})

app.get('/long', (req, res, next)=>{
    let control = (()=>{
        let close, timer;
        return {
            start() {
                if (!timer) {
                    timer = setInterval(()=>{
                        if (!close) {
                            console.log(Date.now() + '')
                            res.write('123');
                        }else {
                            console.log('结束')
                            clearInterval(timer)
                            timer = null
                        }
                    }, 1000);
                }
            },
            close() {
                close = true
            }
        }
    })()
    control.start()
    req.on('close', ()=>{
        control.close()
    })
})

app.get('/connect', (req, res) => {
    let control = (function () {
        let timer;
        let close = false;
        return {
            start: function () {
                if (!timer) {
                    timer = setInterval(function () {
                        if (close) {
                            clearInterval(timer);
                            console.log('连接关闭')
                            return;
                        }
                        console.log(new Date().getTime() + '\n')
                        res.write(new Date().getTime() + '\n');
                    }, 1000);
                }
            },
            stop: function () {
                close = true;
            }
        }
    })()
    control.start();
    req.on('close', () => {
       control.stop();
    })
});


app.listen(3000);