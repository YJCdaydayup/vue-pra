var express = require('express')
var app = express();
var fs = require('fs');

var bodyparse = require('body-parser')
var multer = require('multer');

app.use('/public', express.static('public'));

// 支持post请求参数解析
app.use(bodyparse.urlencoded({
    extended: false
}))

// 设置文件上传路径和name,读取input的name为image下的数据，暂存在tmp目录下
app.use(multer({
    dest: './tmp/'
}).array('image'));

app.get('/index.html', function (req, res) {
    res.sendFile(__dirname + '/public/' + 'file.html');
})

app.post('/upload_file', function (req, res) {
    console.log(req.files[0]);
    var des_file = __dirname + '/' + req.files[0].originalname;

    // 文件存在path下，必须先readFile来从前面设置的临时目录下读取出文件，在通过writeFile写文件
    /**
     *
     {
         fieldname: 'image',
         originalname: '3.jpg',
         encoding: '7bit',
         mimetype: 'image/jpeg',
         destination: './tmp/',
         filename: '2a1e9724c3dc9bc38a41705ac7917889',
         path: 'tmp/2a1e9724c3dc9bc38a41705ac7917889',
         size: 36320
     }
     **/

    fs.readFile(req.files[0].path, function (err, data) {
        fs.writeFile(des_file, data, function (err) {
            if (err) {
                console.log(err)
            }else {
                response = {
                    msg: 'File uploaded succuessfully',
                    filename: req.files[0].originalname
                }
                res.send(JSON.stringify(response));
            }
        })
    })
})

app.listen(8081, function () {

})