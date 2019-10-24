let http = require('http');
let uc = require('upper-case');
let logger = require('./logger');

let app = function (req, res) {
    logger.info("Hello World"); // server-side code, for example

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(uc("Hello World!"));
    res.end();
};

http.createServer(app).listen(8080);