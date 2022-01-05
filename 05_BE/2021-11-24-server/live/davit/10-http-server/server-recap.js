import http from 'http';

// - `process.argv`  IS the command line : node[0] filename[1] xxx[3] xxx[4]
// start the server on the command line via:
// $> nodemon server-recap.js 1080
// then the server should listen to the port given as commandline parameter


let portNumber = process.argv[2] // we are specifying tat index number 2 from the command line 
//is going inside variable portNumber

const server = http.createServer(requestHandler);
server.listen(portNumber);

function requestHandler(req, res) {
  console.log("request received");

  // connect to a database... retrieve data and respond with

  res.writeHead(200, {'Content-Type': 'text/plain'}); // write to HTTP header
  res.write('Hello World! 1080'); // write to HTTP body
  res.end(); // end of message
}