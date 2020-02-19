'use strict'

const http = require('http')

const homepage = `
<!DOCTYPE html>
<html>
<head>
<meta charset='utf-8'/>
<title>线上部署html</title>
</head>
<body>
    <h2>高级课程</h2>
    <ul>
        <li>
            <a href="http://www.baidu.com">nodejs电影网站</a>
        </li>
    </ul> 
</body>    
</html>
`


let server = http.createServer((req, res)=> {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end(homepage)
})

server.listen(3000)