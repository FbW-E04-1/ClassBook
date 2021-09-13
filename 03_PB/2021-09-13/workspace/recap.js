/**
 * A global variable is available everywhere in the code after its declaration
 *
 * Each function creates a local scope, and each local scope will be different (separated) from one another
 */

let a = 5;

function myFunction() {
  // this is a local scope
  let b = 6;
  console.log(a); // ? 5
}

myFunction();
console.log(a); // ? 5

function anotherFunction() {
  // this is a local scope
}

function sayHello() {
  console.log("hello");
}

function sum(a, b) {
  let result = a + b;
  return result;
}

let result = sayHello();
console.log("the result of the function is", result);

let total = sum(2, 3);
console.log("total is", total);

console.log();
console.log("=================");
console.log();

// console.log(b);
// let b = 2;

/**
 * Hoisting
 *
 * functions declared (or created) with the traditional function declaration, example:
 *
 * function myFunction() {....}
 *
 * are hoisted. It means that we can use them before their declaration
 */

printNumber(5);

// hoisted
function printNumber(n) {
  console.log(n);
}

// print("blabla");
// print(5);

// // not hoisted
// let print = function(something) {
//     console.log(something);
// }

/**
 * Date object
 *
 * It represents the number of milliseconds from January 1st 1970
 *
 * To transform milliseconds to seconds we divide by 1000
 *
 * .toFixed() - returns a string
 * parseInt() - transforms a string into an integer
 * Math.floor() - rounds an integer down
 *
 */
let seconds = Math.floor(Date.now() / 1000);
console.log(Math.floor(Date.now() / 1000)); // seconds - UNIX timestamp
console.log(Math.floor(Date.now() / 1000 / 60)); // minutes
console.log(Math.floor(Date.now() / 1000 / 60 / 60)); // hours

/**
 * Static methods
 *
 * Those are methods that we use from the class itself, not from the instance of the class.
 * Normally, they are utilities
 *
 * Some examples:
 *
 * Object.from()
 * Object.keys()
 * Object.values()
 *
 * Array.isArray()
 *
 * Date.now()
 */

let person = {
  firstName: "mike",
  age: 27,
};

let keys = Object.keys(person);

console.log(keys);
console.log(Object.keys(person));
console.log(Object.values(person));

/**
 * constants
 *
 * A constant variable is a variable that cannot be modified after its initialization.
 *
 * If we define a constant array or a constant object, we can modify their content, but we cannot
 * modify the array or the object themselves
 */

const className = "Dragonfly";

const people = [];

people.push("chris");
people.push("joanne");
people.push("christina");

console.log(people);
people.pop();

/**
 * Copy properties from 1 object to another, or merging 2 objects together
 *
 * 1. spread operator
 * 2. Object.assign() (static method)
 */

let person1 = {
  firstName: "bob",
  lastName: "twin",
  age: 39,
};

let address = {
  street: "Some street",
  city: "Berlin",
};

// use the spread operator to merge 2 objects into a new one
let personWithAddress = { ...person1, ...address };
console.log(personWithAddress);

let personWithAddress2 = Object.assign(person1, address);
console.log(personWithAddress2);

/**
 * Closure
 *
 * - A closure is a function that has access to its surrounding scope
 * - we can have a function (outer function) that returns a new function (inner function) and the inner function
 * has ALWAYS access to whatever was inside of outer function (its scope) 
 * 
 * - A closure is a function having access to the parent scope, even after the parent function has closed.
 * 
 * - A closure is the combination of a function bundled together (enclosed) 
 * with references to its surrounding state (the lexical environment). 
 * In other words, a closure gives you access to an outer function’s scope from an inner function.
 */

function makeCounter() {
  let counter = 0;
  return function () {
    counter++;
    return counter;
  };
}
