/* 
    Using typeof with objects and arrays
*/

console.log(typeof 2);
console.log(typeof 2); // "number"
console.log(typeof 1.98); // "number"

let number = 28;
console.log(typeof number); // "number"
console.log(typeof fdlsakfjasddfkja); // "undefined"

console.log(typeof "blablabla"); // "string"

console.log(typeof true); // "boolean"
console.log(typeof "true"); // "string"
console.log(typeof false); // "boolean"

console.log(typeof (2 + 9)); // "number"

console.log(typeof (9 > 2)); // "boolean"

function sum(a, b) {
  return a + b;
}

console.log(typeof sum); // "function"

console.log(typeof sum(1, 3)); // "number"

console.log(typeof {}); // "object"

let person = {
  firstName: "carlo",
  city: "Messina",
};

console.log(typeof person); // "object"

console.log("typeof []", typeof []); // "object"
console.log("typeof [1, 2, 3]", typeof [1, 2, 3]); // "object"

// How can we know if a varialbe is an actual object or an array?

// Objects don't have a length property

let myArray = [1, 2, 3];
let myObject = { name: "something" };

console.log(myArray.length); // 3
console.log(myObject.length); // undefined

if (typeof myObject === "object" && myObject.length !== undefined) {
  console.log(myObject + " is an array");
} else {
  console.log(myObject + " is an object");
}

function isItArray(objectOrArray) {
  if (typeof objectOrArray === "object" && objectOrArray.length !== undefined) {
    console.log(objectOrArray);
    console.log("is an array");
  } else {
    console.log(objectOrArray);
    console.log("is an object");
  }
}

isItArray(myArray);
isItArray(myObject);

console.log(Array.isArray({}));
console.log(Array.isArray([]));
console.log(Array.isArray([1, 2, 3]));

if (Array.isArray(myArray)) {
  console.log(myArray + " is an array");
}
