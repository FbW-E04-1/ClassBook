/*
    Spread operator: ...

    - it's used for shallow-cloning (not deep copy)
*/

let person = {
  firstName: "John",
  lastName: "Smith",
  age: 18,
  address: {
    street: "streetname",
    number: 12,
  },
};

//  let anotherPerson = person;

// shallow-cloning
let anotherPerson = { ...person };
anotherPerson.firstName = "Jessica";
anotherPerson.address.street = "another street name";

console.log(anotherPerson);
console.log(person);
console.log(anotherPerson === person);
/*
    - we store information in something called memory
    - each piece of information has its own "address"

    - when we create the object person, it's saved in some address, like 123348274
    - when we assign person to another variable, what we are actually doing
    is assigning the memory location
    - after the assignment, "anotherPerson" and "person" will point to the
    same memory location

    // memory location of person is 123348274
    let person = {
        firstName: "John",
        lastName: "Smith",
        age: 18,
    };

    // memory location of anotherPerson is also 123348274
    let anotherPerson = person;
*/

// let anotherPerson = person;

// console.log("are anotherPerson and person the same?", anotherPerson === person);
// console.log(person);
// console.log(anotherPerson);

// anotherPerson.firstName = "Maria";

// console.log(person);
// console.log(anotherPerson);

// let emptyObject = {};
// let anotherEmptyObject = {};
// console.log(emptyObject === anotherEmptyObject);
// emptyObject.name = "I'm empty";
// console.log(emptyObject);
// console.log(anotherEmptyObject);

// let myObject = {};
// let objectCopy = myObject;
// myObject.name = "something";

// console.log(myObject);
// console.log(objectCopy);

let animal = {
  type: "cat",
  name: "bruce",
};

let animal2 = {
  type: "cat",
  name: "bruce",
};

console.log(animal === animal2);

console.log(1, 2, 3, 4, 5, 6, 7, 8, 9)



let numbers = [1, 2, 3, 4, 5];
console.log("the max value is:", Math.max(1, 2, 3));
console.log("the max value is:", Math.max([1, 2, 3]));
console.log("the max value is:", Math.max(...numbers));





function sumArray (numbers) {
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    return total;
}

sumArray([1, 2, 3, 4, 1, 5, 45, 56, 6, 6, 6, 6, 6, 6, 67, 7]); // <- this works
// sumArray(1, 2, 3); // <- this does NOT work

// sumArray(...[1, 2, 3]); // <- this does NOT work

console.log(1, 2, 3, 4, 5, 6, 7, 8, 9)

function sum(a, b, c) {
    return a + b + c;
}

let array = [1, 2, 3]
console.log(sum(array));

function validate(input) {
    if (typeof input !== "string") {
        console.log("error");
        return;
    }
    // ....
}

/*
...[1, 2, 3] => 1 2 3
*/