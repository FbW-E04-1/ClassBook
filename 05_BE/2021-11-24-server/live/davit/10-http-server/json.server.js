//JSON => javascript object notation

import http from "http";

let portNumber = process.argv[2];

const server = http.createServer(requestHandler);
server.listen(portNumber);

function requestHandler(req, res) {
  console.log("request received");

  let obj = {
    firstname: "David",
    lastname: "Rabinovich",
    age: 36,
    profetion: "web developer",
  };

  let jsonRepresentation = JSON.stringify(obj);

  res.writeHead(200, { "Content-Type": "application/json" });
  res.write(jsonRepresentation);
  res.end();
}
