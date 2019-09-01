/**
 * Created by yangli on 2019/9/1.
 */

'use strict'

const express = require('express');

let app = express();

app.get('/:username/:oid', (req, res)=> {
    let username = req.params.username;
    let oid = req.params['oid'];
    console.log(req.url);
    res.send(username +  oid);
})

app.listen(3000);