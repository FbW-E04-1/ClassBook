require("dotenv").config();

const express = require("express"); // import express from "express"
const server = express();

server.listen(process.env.PORT, () => console.log(`server running on port ${process.env.PORT}`));

server.use(loggingMiddleware);

function loggingMiddleware(req, res, next) {
	console.log('Time:', Date.now(), req.url);
	next();
}

server.get('/', (req, res) => {
	console.log('GET /');
	res.send('response');
});

const usersRouter = require('./routers/usersRouter.js');
server.use('/users', usersRouter);
