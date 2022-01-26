require("dotenv").config();
var makeCookieParser = require('cookie-parser');

const express = require("express");
const server = express();

server.listen(process.env.PORT, () => console.log(`server listening on port ${process.env.PORT}`));

server.use(require('./middlewares/logger'));

server.use(express.json());
server.use(makeCookieParser());

// setting a cookie by 'res.cookie()'
// this will result in the HTTP-response 
// containing an according 'Set-Cookie' header
server.get('/cookie', (req, res) => {
	cookieName = "name2";
	cookieValue = "bob";
	res.cookie(
		cookieName, 
		cookieValue,
		//{ domain: 'localhost', path: '/admin', secure: true } // the option-object is optional
	);

	res.status(200).send('cookie ' + cookieName + ' = ' + cookieValue);
});

// setting cookie be setting the 'Set-Cookie' header:
// (this is the manual/"hard" way)
server.get('/cookie_by_set_header', (req, res) => {
	cookieName = "name3 set by setHeader";
	cookieValue = "chris";
	res.setHeader("Set-Cookie", `${cookieName}=${cookieValue}`);

	res.status(200).send('cookie ' + cookieName + ' = ' + cookieValue);
});

// setting multiple cookies
server.get('/cookies', (req, res) => {
	cookieName = "name4";
	cookieValue = "dorian";
	res.cookie(
		cookieName, 
		cookieValue,
	);

	cookieName = "name5";
	cookieValue = "eve";
	res.cookie(
		cookieName, 
		cookieValue,
	);

	res.status(200).send('multiple cookies set');
});

// showing the cookies
server.get('/accessCookies', (req, res) => {
	console.log("cookies: ", req.cookies);
	res.status(200).json(req.cookies);
});

// a server-implementation could handle http-requests 
// to different hosts in distinct ways: 
server.get('/request_host', (req, res) => {
	if (req.hostname == 'localhost') {
		res.status(200).send("actions for host == localhost");
	} else {
		res.status(200).send("actions for every other host");
	}
	// therefore it is sensible that cookies can be restricted 
	// to be sent only to the origin host and that the distinction
	// is made by the browser on basis of the HTTP host as given 
	// in the HTTP-Request, e. g.:
	// GET http://localhost/
	// GET http://127.0.0.1/
	// are requests to different hosts
});

// /custom routes

server.use(require('./middlewares/errorHandler'));
server.use("/", require("./middlewares/notFoundHandler"));
