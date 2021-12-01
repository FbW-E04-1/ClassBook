require("dotenv").config();

var express = require('express')
var server = express()

server.listen(
	process.env.PORT, 
	() => console.log(`server running on port ${process.env.PORT}`)
);

// paths as strings
server.get('/path', function (req, res) {
  res.send('/path');
});

server.get('/path.with.dot', function (req, res) {
	res.send('/path.with.dot');
});

server.get('/path-with-hyphen', function (req, res) {
	res.send('/path-with-hyphen');
});

// blanks are encoded as "%20"
server.get('/work%20from%20home', function (req, res) {
	res.send('/work from home');
});  

// paths as "string pattern"
// paths with an "?"
// http://localhost:8080/acd
// http://localhost:8080/abcd
// the "?" marks the character before as optional
server.get('/ab?cd', function (req, res) {
	res.send('matching the "string pattern": /ab?cd');
});

// the "+" marks the character to be there at _least_ one time
// http://localhost:8080/bcd
// http://localhost:8080/bccd
// ...
// http://localhost:8080/bccccccccccd
server.get('/bc+d', function (req, res) {
	res.send('matching the "string pattern": /bc+d');
});

// the matching path must start with "cd" and end with "ef".
server.get('/cd*ef', function (req, res) {
	res.send('cd*ef')
});

// the "()" group some characters
// so that the "?" acts on the group
server.get('/de(fg)?h', function (req, res) {
	res.send('de(fg)?h');
});

// at least one "+"
server.get('/e(fg)+h', function (req, res) {
	res.send('e(fg)+h');
});

server.get('/h(ij)?', function (req, res) {
	res.send('h(ij)?');
});

// YOU CAN NOT START A PATH WITH A BRACKET LIKE: "/()" 

// path as "regular expression" (regex)
// match any path with an "l" in it
server.get(/z/, function (req, res) {
	res.send('/z/');
});

// match any "kayleigh" no matter of the capitalization
// defined by addin the 'i' (ignore case) option to the regex
server.get(/kayleigh/i, function (req, res) {
 	res.send('/Kayleigh/');
});

//
server.get(/.*fly$/, function (req, res) {
	res.send('/.*fly$/');
});
  
server.get(/m+bird$/, function (req, res) {
	res.send('/m+bird$/');
});

// "^" to mark the start of a string, seems not to be implemented
//     by Express as it should be if implementing regexes.
// server.get(/^m{1,}fish$/, function (req, res) {
// 	res.send('/m{1,}fish$/');
// });
