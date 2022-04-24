import {upperCase} from "upper-case";
import * as http from "http";
import logger from "./logger.js";

let app = function (req, res) {
  logger.info("Hello World"); // server-side code, for example

  res.writeHead(200, {"Content-Type": "text/html"});
  res.write(upperCase("Hello World!"));
  res.end();
};

http.createServer(app).listen(8080);
