require("dotenv").config();

const Ajv = require("ajv");
const ajv = new Ajv();

const express = require("express");
const server = express();

server.listen(process.env.PORT, () => console.log(`server running on port ${process.env.PORT}`));

// populate req.body - req.header 'Content-Type' must be 'application/json'
server.use(express.json());

const resourceSchema = {
	type: "object",
	properties: {
	  foo: {type: "integer"},
	  bar: {type: "string"},
	  password: {
		  type: "string",
		  minLength: 8
	  }
	},
	required: ["foo", "password"],
	additionalProperties: false // try: true
};

const userSchema = {
	type: "object",
	properties: {
	  name: {type: "string"},
	  password: {
		  type: "string",
		  minLength: 8
	  }
	},
	required: ["name", "password"],
	additionalProperties: false
};

function makeValidationMiddleware(schema) {
	return function validateResourceMiddleware(req, res, next) {
		console.log('validateSchemaMiddleware');

		let data = req.body;
		const valid = ajv.validate(schema, data);

		if (!valid) {
			console.error(ajv.errors);
			return res.json(ajv.errors);
		}

		console.log("data successfully validated");
		next();
	};
}

server.post('/resource', makeValidationMiddleware(resourceSchema), (req, res) => {
	console.log(req.body);
	res.send(req.body);
});

server.post('/user', makeValidationMiddleware(userSchema), (req, res) => {
	console.log(req.body);
	res.send(req.body);
});

// processing-chain: 
// request 'POST /resource' 
// -> express.json() 
// -> middlewareFn 
// -> route (server.post('/resource', ...))

// '404' if nothing else got triggered
server.use((req, res) => res.status(404).end());
