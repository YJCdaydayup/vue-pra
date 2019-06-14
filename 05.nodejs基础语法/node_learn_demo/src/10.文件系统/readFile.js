var fs = require('fs');

// 异步读取
fs.readFile('tsconfig.json', function (err, data) {
    if (err) {
        console.log(err.trace);
        return;
    }
    // console.log(data.toString());
    // console.log(JSON.parse(JSON.stringify(data)))

    var data = JSON.parse(data.toString())
    console.log(data.exclude.length)
});