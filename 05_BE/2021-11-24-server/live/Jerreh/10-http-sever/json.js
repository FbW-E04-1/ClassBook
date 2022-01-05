import http from "http";

const sever = http.createServer(requestHandler);
sever.listen(8000);
function requestHandler(req, res) {
  let obj = {
    name: "Ana",
    lastName: "seeks",
  };

  let jsonpresent = JSON.stringify(obj);
  res.writeHead(200, { "content-type": "application/json" });
  res.write(jsonpresent);
  res.end();
}
