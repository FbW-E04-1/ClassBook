import http from "http";
import axios from "axios";

const server = http.createServer(requestHandler);
let portNumber = process.argv[2];

server.listen(portNumber);

async function requestHandler(req, res) {
  try {
    const response = await axios.get("http://localhost:8080");
    let person = response.data;
    console.log(response.data);

    res.write("<pre>");
    res.write(`name: ${person.firstname}. Last name: ${person.lastname} and the age: ${person.age}`);
    /* res.writeHead(200, { "Content-Type": "application/json" });
  res.write(jsonRepresentation); */
    res.end();
  } catch (error) {
    console.log(error);
  }
}
