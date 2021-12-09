require("dotenv").config();

var express = require('express')
var server = express()

// console.log("port:", process.env.PORT);

server.listen(
	process.env.PORT, 
	() => console.log(`server running on port ${process.env.PORT}`)
);

var cb0 = function (req, res, next) {
	console.log('CB0');
	next();
}

var cb1 = function (req, res, next) {
	
	// some processing leading to an error:
	let isError = true;
	if (isError) { // early bailout
		console.error('CB1 - some error');
		res.status(400).send("some error");
		return
	}

	// only executed if no error is there:
	console.log('CB1');
	next();
}

var cb2 = function (req, res) {
	res.send('Hello from C2')
}
  
server.get('/', [cb0, cb1, cb2]);
server.get('/error', [cb0, cb1, cb2]);

