const bcrypt = require('bcrypt');
require('dotenv').config();
let CryptoJS = require('crypto-js');

usernameParam = process.argv[2];
passwordParam = process.argv[3];

//console.log("argv:", process.argv);

const USERS = {
	alice: {
		// Resultant hashes will be 60 characters long 
		// and they will include the salt among other parameters, 
		// as follows:
		//         $[algorithm]$[cost]$[salt][hash]
		//          2b (version of the alg. used)
		//             10 (number of salt rounds)
		//                lvzifJWS7Wl06o4rDTiHTe (salt)
		//                                      rCJliy8w5YlFsKn9XIZOeOJTBFZeJSC (hash)
		password: "$2b$12$uABxMVI7DCSVl8wSLax4teddV3tWMumzHq4cvAFP/PCPW9fNF40rW" // => 0.1 seconds to compute the hash
	},
	bob: {
		password: "$2b$12$awvxSJbNXR0tzpAxlsWEmeSUPoc8uZvzrT00unZCC6Ymun6C9bOnK" // => 1 second to compute the hash
		//password: "$2b$15$xsK7rA35tMIgtecRIg2fVu8oJvCMq1K8Olxpf0oVM1VtRZpjiG2y." // => 3 seconds to compute the hash
	},
};

// console.log("username:", usernameParam, "password: ", passwordParam);

// if (usernameParam == "alice" && passwordParam == "1234") {
// if (usernameParam == "alice" && passwordParam == USERS.alice.password) {
// if (usernameParam == "bob" && passwordParam == USERS.bob.password) {

function calculateHash(password){
	const saltRounds = 12; // 10 is the current default in bcrypt
	let hash = bcrypt.hashSync(password + process.env.PEPPER, saltRounds);

	return hash
}	

function authenticate(username, password) {
	if (!USERS[username]) {
		console.log("not authenticated");
		return
	}
	
	if (bcrypt.compareSync(password + process.env.PEPPER, USERS[username].password)) {
		console.log("authenticated");
	} else {
		console.log("not authenticated")
	}
}

console.log("hash for given password:", calculateHash(passwordParam));
authenticate(usernameParam, passwordParam);
