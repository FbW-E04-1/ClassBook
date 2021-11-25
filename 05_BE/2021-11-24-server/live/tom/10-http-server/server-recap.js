import http from 'http';

const server = http.createServer(requestHandler);
server.listen(8080);

function requestHandler(req, res) {
  console.log("request received");

  // connect to a database... retrieve data and respond with

  res.writeHead(200, {'Content-Type': 'text/plain'}); // write to HTTP header
  res.write('Hello World!'); // write to HTTP body
  res.end(); // end of message
}
