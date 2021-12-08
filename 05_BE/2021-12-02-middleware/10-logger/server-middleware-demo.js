require("dotenv").config();

const express = require("express"); // import express from "express"
const server = express();

server.listen(process.env.PORT, () => console.log(`server running on port ${process.env.PORT}`));

// 1. inplace definition of middleware-function
// server.use((req, res, next) => {
// 	console.log('middleware called');
// 	console.log('req.url: ', req.url);
// 	next();
// });

// 2. definition of the function 
// and reference to it in server.use(middlewareFn)
// function middlewareFn(req, res, next){
//  	console.log('middleware called');
//  	console.log('req.url: ', req.url);
// 	next();
// };
// server.use(middlewareFn);

// 3. creating a function and returning it for later use
function makeMiddleware(config) {
	return function middlewareFn(req, res, next){
		console.log('middleware called with config:', config);
		console.log('req.url: ', req.url);
		next();
	};
}

const middlewareFunction = makeMiddleware("with this configuration");
server.use(middlewareFunction);

server.get('/', (req, res) => {
	res.send('request received');
});
