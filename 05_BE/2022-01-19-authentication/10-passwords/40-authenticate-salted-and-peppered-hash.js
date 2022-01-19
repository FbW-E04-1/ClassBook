require('dotenv').config();
let CryptoJS = require('crypto-js');

usernameParam = process.argv[2];
passwordParam = process.argv[3];

//console.log("argv:", process.argv);

const USERS = {
	alice: {
		salt: "asdfkjw49sfdkgj;w349stnuvsribtn",
		password: "40da6829e42b7b9a63e29c7aa127c450fb77d88d0718cec3dd0d0d77fddae5d3"
	},
	bob: {
		salt: "3w098475q-5w4fw45tw352wtrqf",
		password: "1cae998e0db953bfa234c8b490d3979ef734ec69bf0b2dd2bfad03114d2026e9"
	},
};

// console.log("username:", usernameParam, "password: ", passwordParam);

// if (usernameParam == "alice" && passwordParam == "1234") {
// if (usernameParam == "alice" && passwordParam == USERS.alice.password) {
// if (usernameParam == "bob" && passwordParam == USERS.bob.password) {

function calculateHash(username, password){
	// this function is the way hashes are calculated and salted in this "project"
	// never change the order of the password and salt because that would change the 
	// computed hash.
	let longerPassword = password + USERS[username].salt + process.env.PEPPER

	return CryptoJS.SHA256(longerPassword).toString();
}

function authenticate(username, password) {
	var passwordHash = calculateHash(username, password);

	// console.log(passwordHash);
	// return
	
	if (USERS[username] == undefined) {
		console.log("not authenticated");
		return
	}
	
	if (USERS[username].password == passwordHash) {
		console.log("authenticated");
	} else {
		console.log("not authenticated")
	}
}

authenticate(usernameParam, passwordParam);
