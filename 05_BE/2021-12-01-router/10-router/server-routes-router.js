require("dotenv").config();

const express = require("express"); // import express from "express"
const server = express();

server.listen(
	process.env.PORT, 
	() => console.log(`server running on port ${process.env.PORT}`)
);

server.get('/', (req, res) => {
	console.log("request received");
	res.send('<html><body><h2>RESPONSE</h2><a href="/users">users</a></body></html>');
});

// extract /users to usersRouter
	// server.get('/users', (req, res) => {
	// 	console.log("request received: GET /users");
	// 	res.send('response: users');
	// });

	// server.get('/users/:userId', (req, res) => {
	// 	console.log("request received: GET /users");
	// 	res.send('response: user with userId: ' + req.params.userId);
	// });
// /extract
var usersRouter = require('./routers/usersRouter.js');
server.use('/users', usersRouter);
