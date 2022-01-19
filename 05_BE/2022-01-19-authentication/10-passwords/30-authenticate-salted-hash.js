let CryptoJS = require('crypto-js');

usernameParam = process.argv[2];
passwordParam = process.argv[3];

//console.log("argv:", process.argv);

const USERS = {
	alice: {
		salt: "asdfkjw49sfdkgj;w349stnuvsribtn",
		password: "56322c6c08ecfaeeb2b01acf8c7da4c0fdf4f02cd24c82a48f1f96e79dd29a5b" // => you've been owned: 1234
	},
	bob: {
		salt: "3w098475q-5w4fw45tw352wtrqf",
		password: "32a24c6bae7d3e16c5d115186cf50d43e26b6636ee343899732073652538a43e" // => you've been owned: 2222
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
	let longerPassword = password + USERS[username].salt

	return CryptoJS.SHA256(longerPassword).toString();
}

function authenticate(username, password) {
	var passwordHash = calculateHash(username, password);

	console.log(passwordHash);
	return
	
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
