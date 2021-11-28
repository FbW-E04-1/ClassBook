// JSON => Javascript Object Notation
import http from 'http';
import axios from 'axios';

const server = http.createServer(requestHandler);
server.listen(8081);

async function requestHandler(req, res) {

	try {
		const response = await axios.get('http://localhost:8080');
		let person = response.data;
		console.log(person);
	 
    	// res.writeHead(200, {'Content-Type': 'application/json'});

		res.write(`${person.firstname} ${person.lastname} (${person.age})\n`);
		res.end();

	} catch (error) {
		console.error(error);
  	}

	
}
