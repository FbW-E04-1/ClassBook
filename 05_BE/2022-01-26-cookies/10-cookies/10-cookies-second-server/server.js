require("dotenv").config();
var makeCookieParser = require('cookie-parser');

const express = require("express");
const server = express();

server.listen(process.env.PORT, () => console.log(`server listening on port ${process.env.PORT}`));

server.use(require('./middlewares/logger'));

server.use(express.json());
server.use(makeCookieParser());

// custom routes

server.get('/cookie', (req, res) => {
	cookieName = "2nd server cookie";
	cookieValue = "TEST";
	res.cookie(
		cookieName, 
		cookieValue,
		//{ domain: 'localhost', path: '/admin', secure: true }
	);

	res.status(200).send('cookie ' + cookieName + ' = ' + cookieValue);
});

server.get('/accessCookies', (req, res) => {
	console.log("cookies: ", req.cookies);
	res.status(200).json(req.cookies);
});

// /custom routes

server.use(require('./middlewares/errorHandler'));
server.use("/", require("./middlewares/notFoundHandler"));
