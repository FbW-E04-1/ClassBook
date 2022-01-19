usernameParam = process.argv[2];
passwordParam = process.argv[3];

//console.log("argv:", process.argv);

const USERS = {
	alice: {
		password: "1234"
	},
	bob: {
		password: "2222"
	},
};

// console.log("username:", usernameParam, "password: ", passwordParam);

// if (usernameParam == "alice" && passwordParam == "1234") {
// if (usernameParam == "alice" && passwordParam == USERS.alice.password) {
// if (usernameParam == "bob" && passwordParam == USERS.bob.password) {

function authenticate(usernameParam, passwordParam) {
	if (USERS[usernameParam] == undefined) {
		console.log("not authenticated");
		return
	}
	
	if (USERS[usernameParam].password == passwordParam) {
		console.log("authenticated");
	} else {
		console.log("not authenticated")
	}
}
	
authenticate(usernameParam, passwordParam);
