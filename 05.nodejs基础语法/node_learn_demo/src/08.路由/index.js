var server = require('./server')
var route = require('./router')

server.start(route.route);

