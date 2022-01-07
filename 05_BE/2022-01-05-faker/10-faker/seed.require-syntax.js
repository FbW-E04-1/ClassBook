require('dotenv').config();

const initDB = require('./lib/database.require-syntax.js');

var faker = require("faker");
// pin point the data
faker.seed(12345);

async function generateData() {
	const db = await initDB();
	
	// cleanup 
	// deleteMany(): https://docs.mongodb.com/manual/reference/method/db.collection.deleteMany/
	await db.collection("users").deleteMany();

	var personList = [];

	var numberOfPersons = 12;
	for (let i=0; i<numberOfPersons; i++) {
	
		let date = faker.date.between("1945-01-01", "2022-01-01");
		
		let birthdate = date.getFullYear() + "-" + (appendLeadingZeroes(date.getMonth()+1)) + "-" + appendLeadingZeroes(date.getDay());
	
		person = {
			firstname: faker.name.firstName(),
			lastname: faker.name.lastName(),
			email: faker.internet.email(),
			birthdate: birthdate
		};
	
		personList.push(person);
	}

	// insert persons
	// insertMany(): https://docs.mongodb.com/realm/mongodb/actions/collection.insertMany/
	await db.collection("users").insertMany(personList);
}

generateData();
// .then(
// 	() => {
// 		process.exit(0);
// 		console.log("calling generateData()");
// 	}
// )
// .catch( 
// 	error => {
// 		console.error(error);
// 		process.exit(1);
// 	}
// );
