let CryptoJS = require('crypto-js');

usernameParam = process.argv[2];
passwordParam = process.argv[3];

//console.log("argv:", process.argv);

const USERS = {
	alice: {
		password: "81dc9bdb52d04dc20036dbd8313ed055" // => you've been owned: 1234
	},
	bob: {
		password: "934b535800b1cba8f96a5d72f72f1611" // => you've been owned: 2222
	},
};

// console.log("username:", usernameParam, "password: ", passwordParam);

// if (usernameParam == "alice" && passwordParam == "1234") {
// if (usernameParam == "alice" && passwordParam == USERS.alice.password) {
// if (usernameParam == "bob" && passwordParam == USERS.bob.password) {

function calculateHash(password){
	return CryptoJS.MD5(password).toString();
}

function authenticate(usernameParam, passwordParam) {
	var passwordHash = calculateHash(passwordParam);

	// console.log(passwordHash);
	// return
	
	if (USERS[usernameParam] == undefined) {
		console.log("not authenticated");
		return
	}
	
	if (USERS[usernameParam].password == passwordHash) {
		console.log("authenticated");
	} else {
		console.log("not authenticated")
	}
}

authenticate(usernameParam, passwordParam);
