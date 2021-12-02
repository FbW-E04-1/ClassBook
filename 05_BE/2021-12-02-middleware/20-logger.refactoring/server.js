require("dotenv").config();

const express = require("express"); // import express from "express"
const server = express();

server.listen(process.env.PORT, () => console.log(`server running on port ${process.env.PORT}`));

const loggingMiddleware = require('./middlewares/loggingMiddleware.js');
server.use(loggingMiddleware);

// Request -> Server -> loggingMiddleware -> route through "GET /"
server.get('/', (req, res) => {
	console.log('GET /');
	res.send('response');
});

const usersRouter = require('./routers/usersRouter.js');
server.use('/users', usersRouter);
