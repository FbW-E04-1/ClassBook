import dotenv from 'dotenv';
dotenv.config();

import faker from 'faker';

// we import db AND client from database.js
import { db, client } from './lib/database.js';

import mongodb from 'mongodb';

// pin point the data
faker.seed(12345);

async function generateData() {

	// cleanup
	// deleteMany(): https://docs.mongodb.com/manual/reference/method/db.collection.deleteMany/
	await db.collection("users").deleteMany();

	var personList = [];

	var numberOfPersons = 10;
	for (let i=0; i<numberOfPersons; i++) {

		let date = faker.date.between("1945-01-01", "2022-01-01");

		let birthdate = date.getFullYear() + "-" + (appendLeadingZeroes(date.getMonth()+1)) + "-" + appendLeadingZeroes(date.getDay());

		let person = {
			firstname: faker.name.firstName(),
			lastname: faker.name.lastName(),
			email: faker.internet.email(),
			birthdate: birthdate
		};

		if ( i == 0 ) {
			// ObjectId(): https://docs.mongodb.com/manual/reference/method/ObjectId/
			person._id = mongodb.ObjectId("61d5937c96a9837e162fe71b"); // 24 hex characters
		}

		personList.push(person);
	}

	// insert persons
	// insertMany(): https://docs.mongodb.com/realm/mongodb/actions/collection.insertMany/
	await db.collection("users").insertMany(personList);

	// if we want to get rid of process.exit in line 60, we need to close the connection as this is the last bit that prevents the process from exiting.
	// keep in mind, though, that there is no error handling now. So you might get an unhandled promise rejection error. use try/catch in generateData() to address it accordingly.
	client.close();
}

function appendLeadingZeroes(n){
	if(n <= 9){
	  return "0" + n;
	}

	return n;
}

// *** MAIN ***
generateData();
