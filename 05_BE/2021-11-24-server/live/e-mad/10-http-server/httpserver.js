var http = require("http");
const server = http.createServer(requestHandler)
server.listen(8080);

  function requestHandler(req, res) {
    // res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Who let the dogs out!");
    res.end();
  }