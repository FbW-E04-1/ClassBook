import faker from 'faker';

// 1) empty the database
// 2) refill the database

// let's pin point the starting point of the random generator.
faker.seed(12345);

var person = {
	firstname: "Firstname",
	lastname: "Lastname",
	email: "...",
	birthdate: "in ISO 8601 format"
}

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

console.log("persons: ", personList);

// console.log("name1:", faker.name.findName());
// console.log("name2:", faker.name.findName());
// console.log("name3:", faker.name.findName());

function appendLeadingZeroes(n){
	if(n <= 9){
	  return "0" + n;
	}

	return n;
}
  