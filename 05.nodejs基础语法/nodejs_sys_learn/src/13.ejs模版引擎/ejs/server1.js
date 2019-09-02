'use strict'

const ejs = require('ejs');

ejs.renderFile('./views/test.ejs', {name: 'Sara'}, (err, data) => {
    console.log(data);
})