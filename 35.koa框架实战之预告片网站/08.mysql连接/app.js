var mysql = require('mysql');
var pool  = mysql.createPool({
    connectionLimit : 10,
    host            : '47.115.140.196',
    user            : 'test',
    password        : '123456',
    database        : 'node_music'
});

pool.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
});