require("dotenv").config();

const express = require("express"); // import express from "express"
const server = express();

server.listen(process.env.PORT, () => console.log(`server running on port ${process.env.PORT}`));

// a middleware function must have the parameters (req, res, next)
const loggingMiddleware = require('./middlewares/loggingMiddleware.js');
server.use(loggingMiddleware);

// populate 'req.body' with the HTTP-Request's body
// take care to set the 'Content-Type' header in the Client-Request to 'application/json'
server.use(express.json());

// HTTP-Request -> HTTP-Server (Express) -> loggingMiddleware -> route through "GET /"
server.get('/', (req, res) => {
	console.log('GET /');
	res.send('response');
});

server.post('/', (req, res) => {
	console.log('post route triggered');
	console.log(req.body);
	res.json(req.body);
});

const usersRouter = require('./routers/usersRouter.js');
server.use('/users', usersRouter);
