'use strict'

const mysql = require('mysql')

var pool = mysql.createPool({
    connectionLimit: 10,
    host: '47.115.140.196',
    user: 'test',
    password: '123456',
    database: ''
});

pool.query('SELECT * FROM ', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
});