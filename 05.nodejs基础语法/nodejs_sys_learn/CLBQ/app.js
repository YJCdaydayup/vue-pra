'use strict'

const express = require('express');

let app = express();

app.all('/', (req, res) => {
    app.set('title', 'TITLE');
    res.send('ok');
})

app.all('/t', (req, res) => {
    res.send(app.get('title'));
})

app.listen(3000);