/* 
var  http = require('http')
// change the module s are imported

const server = http.createServer(requestHandler)

server.listener(8080)

funtion requestHandler(req,res){
  console.log("request received");

//connect to a database ... retrieve data and respond with

  res.writeHead(200, {"Content-Type": 'text/plain'}) // write to HTTP head
  res.write('Hello World!') // 


}




 */


 














//var url = require("url");
//var http = require("http");
import http from 'http' // module syntax configurable in package .json
import url from 'url'




/* const { read } = require("fs"); */

//create a server
const server = http.createServer(requestHandler);

//let the server listen to port 8080
const PORT = 8080;
server.listen(PORT);

//this is the function executed for each incoming request
//and it responds
function requestHandler(req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });

  console.log("request received");
  console.log("HTTP-Headers", req.rawHeaders);
  console.log("host", req.headers.host);
  console.log("user-agent", req.headers["user-agent"]);
  console.log("HTTP-URL", req.url);
  console.log("HTTP-METHOD", req.method);

  res.write("No REGRETS");

  //accessing the values given by the URL-query
  // httpp://localhost:8080/path/a/b/?key1=value1&key2=value2

  let parsedURL = url.parse(req.url, true);
  let query = parsedURL.query;
  console.log("parsed url:", query);

  res.write("key1"+ query.key1 + "\n");
  res.write("key2"+ query.key2);
  res.write('<pre>');

  res.end();
  
}

//start server on the command line via:
// `node server.js`