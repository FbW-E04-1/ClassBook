require("dotenv").config();

var express = require('express')
var server = express()

// console.log("port:", process.env.PORT);

server.listen(
	process.env.PORT, 
	() => console.log(`server running on port ${process.env.PORT}`)
);

// HTTP-Methods:
// - GET
// - POST
// - DELETE
// - PUT
// in an Express-server there is for 
// each HTTP-Method a function with the same name (get, post, delete, put)
server.get('/', function (req, res) {
  res.send('hello world');
});

// default route to "say" that the server has not specific route to handle this request
// server.all('/', (req, res) => {
// 	res.status(400).send('not implemented'); // "not implemented"
// });
