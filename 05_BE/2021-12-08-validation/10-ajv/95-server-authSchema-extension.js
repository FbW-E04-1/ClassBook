require("dotenv").config();

const makeValidationMiddleware = require('./middlewares/validationMiddleware');

const express = require("express");
const server = express();

server.listen(process.env.PORT, () => console.log(`server running on port ${process.env.PORT}`));

// populate req.body - req.header 'Content-Type' must be 'application/json'
server.use(express.json());

server.post(
	'/resource', 
	makeValidationMiddleware(require('./schemas/resourceSchema')), 
	(req, res) => {
		console.log(req.body);
		res.send(req.body);
	}
);

server.post( // creating a new user
	'/user', 
	makeValidationMiddleware(require('./schemas/userSchema')), 
	(req, res) => {
		console.log(req.body);
		res.send(req.body);
	}
);

server.post( // authenticating/log-in of a user
	'/authentication', // path
	makeValidationMiddleware(require('./schemas/authenticationSchema')), 
	(req, res) => { // request-handler
		console.log(req.body);
		res.send(req.body);
	}
);

// processing-chain: 
// request 'POST /resource' 
// -> express.json() 
// -> middlewareFn 
// -> route (server.post('/resource', ...))

// '404' if nothing else got triggered
server.use((req, res) => res.status(404).end());
