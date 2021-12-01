// JSON => Javascript Object Notation
import http from 'http';

const server = http.createServer(requestHandler);
server.listen(8080);

function requestHandler(req, res) {
	console.log("request received");

	let obj = {
		firstname: "Hermann",
		lastname: "Hesse",
		age: '1877,Calw',
	};

	let jsonRepresentation = JSON.stringify(obj);

	res.writeHead(200, {'Content-Type': 'application/json'});
	res.write(jsonRepresentation);
	res.end();
}
