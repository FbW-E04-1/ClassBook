//let http = require('http'); // commonjs syntax
import http from "http"; // module syntax, configurable in package.json via "type": "module"
import url from "url";

// https://www.w3schools.com/nodejs/met_http_createserver.asp
// create a server
const server = http.createServer(requestHandler);

// let the server listen on port 8080
const PORT = 8080;
console.log("server listening on port", PORT);
server.listen(PORT);

// this is the function executed for each incoming request
// and it responds
function requestHandler(req, res) {
  // res.writeHead(200, {'Content-Type': 'text/html'});

  console.log("request received");

  console.log("HTTP-Headers:", req.headers);
  console.log("host: ", req.headers.host);
  console.log("user-agent: ", req.headers["user-agent"]);
  console.log("HTTP-URL:", req.url);
  console.log("HTTP-METHOD:", req.method);
  // console.log("http-req-headers:", req.headers);

  res.write("<h1>hello world!</h1>");

  // accessing the values given by the URL-query
  // http://localhost:8080/?key1=value1&key2=value2

  let parsedURL = url.parse(req.url, true);
  let query = parsedURL.query;

  res.write("<pre>");
  res.write("key1: " + query.key1 + "\n");
  res.write("key2: " + query.key2);
  res.write("</pre>");

  res.end();
}

/* start server on the commandline via:
$> node server.js

open the browser and point it to:
http://localhost:8080/

*/
