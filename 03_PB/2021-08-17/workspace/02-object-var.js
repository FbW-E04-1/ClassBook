/* 
    2 ways of getting an object value:

    - person.firstName;
    - person["firstName"];
*/
let person = {
  firstName: "Jessica",
  age: 28,
  job: "professional athlete",
  hobbies: ["drums", "skateboarding", "programming"],
};

console.log(person.firstName);

/* 
    With the square brackets notation I need to write the key of the property
    inside the brackets as a string
*/
console.log(person["firstName"]);

let key = "firstName";

// person[key] // it's the same as writing person["firstName"]
console.log("Person name is:", person[key]);

let newKey = "lastName";

person[newKey] = "Jones"; // person["lastName"] = "Jones";
console.log(person);
// console.log("person[newKey]", person[newKey]);

person.newKey = "Smith";
console.log(person);

/*
    - get an array of the object keys
    - get an array of the object values 
*/

let keys = Object.keys(person);
let values = Object.values(person);
console.log(keys, values);

for (let key of keys) {
//   console.log("key", key);
  console.log("value", person[key]);
}

// person.lastName = "Smith";
// console.log(person);

// let animals = ["giraffe", "lion", "rabbit"];

// console.log(animals[2]);

// let rabbitIndex = 2;

// console.log(animals[rabbitIndex]);

// for (let i = 0; i < animals.length; i++) {
//   console.log(animals[i]);
// }
