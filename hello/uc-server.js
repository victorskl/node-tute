var http = require('http');
var uc = require('upper-case');

var app = function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(uc("Hello World!"));
    res.end();
};

http.createServer(app).listen(8080);