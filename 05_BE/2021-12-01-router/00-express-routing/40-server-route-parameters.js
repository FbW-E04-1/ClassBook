require("dotenv").config();

var express = require('express')
var server = express()

server.listen(
	process.env.PORT, 
	() => console.log(`server running on port ${process.env.PORT}`)
);

server.get('/users/:userId/books/:bookId', function (req, res) {
	console.log(req.params);
	res.send(
		"userId: " + req.params.userId 
		+ "<br> bookId: " + req.params.bookId
	);
});

server.get('/users/:id', (req, res) => {
	res.send(users[req.params.id]);
});

// quick and dirty, in the sense, that the index is used as ID
let users = [
	{firstname: "Thomas", lastname: "Hofmann"}, // index 0
	{firstname: "Albert", lastname: "Thomas"}   // index 1
];

server.get('/name/:name', function (req, res) {
	console.log(req.params);

	// match user if the firstname and/or the lastname matches 'name'

	let matchedUsers = users.filter((user) => {
		return user.firstname == req.params.name || user.lastname == req.params.name;
	});

	res.send(matchedUsers);
});

server.get('/firstname/:firstname', function (req, res) {
	console.log(req.params);

	// match user if the firstname matches 'name'
	let matchedUsers = users.filter((user) => {
		return user.firstname == req.params.firstname;
	});

	res.send(matchedUsers);
});

server.get('/lastname/:lastname', function (req, res) {
	console.log(req.params);

	// match user if the lastname matches 'name'
	let matchedUsers = users.filter((user) => {
		return user.lastname == req.params.lastname;
	});

	res.send(matchedUsers);
});
