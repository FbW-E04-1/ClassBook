import http from 'http';

// start the server on the commandline via:
// $> nodemon server-recap.js 1080
// then the server should listen to the port given as commandline parameter

const server = http.createServer(requestHandler);
server.listen(8080);

function requestHandler(req, res) {
  console.log("request received");

  // connect to a database... retrieve data and respond with

  res.writeHead(200, {'Content-Type': 'text/plain'}); // write to HTTP header
  res.write('Hello World!'); // write to HTTP body
  res.end(); // end of message
}
