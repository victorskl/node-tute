const {upperCase} = require("upper-case");
const http = require("http");
let logger = require("./logger"); // ES5

let app = function (req, res) {
  logger.info("Hello World"); // server-side code, for example

  res.writeHead(200, {"Content-Type": "text/html"});
  res.write(upperCase("Hello World!"));
  res.end();
};

http.createServer(app).listen(8080);
