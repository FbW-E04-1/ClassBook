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
    password: "$2b$15$fTFzm5j0lG2UsjEICJajm.IZ1Tc.BYP1QdbtLE8d/DvBtwKc3sVxu", // => 0.1 seconds to compute the hash
  },
  bob: {
    password: "$2b$12$IjZQCba7XeGUBTmjJZHxieedUeqJlrcDaNd7bHZ/mCC8C2kyOSRgq", // => 1 second to compute the hash
    //password: "$2b$15$xsK7rA35tMIgtecRIg2fVu8oJvCMq1K8Olxpf0oVM1VtRZpjiG2y." // => 3 seconds to compute the hash
  },
};

// console.log("username:", usernameParam, "password: ", passwordParam);

// if (usernameParam == "alice" && passwordParam == "1234") {
// if (usernameParam == "alice" && passwordParam == USERS.alice.password) {
// if (usernameParam == "bob" && passwordParam == USERS.bob.password) {

function calculateHash(password){
	const saltRounds = 15; // 10 is the current default in bcrypt
	let hash = bcrypt.hashSync(password+process.env.PEPPER, saltRounds);

	return hash
}
function generatehash(password){
  var passwordHash = calculateHash(password);
	 console.log(passwordHash);
	
}

function authenticate(username, password) {
	
	
	if (!USERS[username]) {
		console.log("not authenticated");
		return
	}
	
	if (
    bcrypt.compareSync(password + process.env.PEPPER, USERS[username].password)
  ) {
    console.log("authenticated");
  } else {
    console.log("not authenticated");
  }
}

authenticate(usernameParam, passwordParam);
generatehash(passwordParam);