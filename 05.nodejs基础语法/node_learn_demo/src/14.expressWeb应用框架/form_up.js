var express = require('express')

var app = express();

app.get('/index.html', function (req, res) {
    res.sendFile(__dirname + '/public/' + 'index.html');
})

app.get('/process_get', function (req, res) {
    var response = {
        firstName: req.query.firstName,
        lastName: req.query.lastName
    }
    console.log(response)
    res.send(JSON.stringify(response))
})

app.listen(8081, function () {

})