/*
 * Function parameters
 *
 * We've seen how we can use global variables (variables outside the function scope) inside of a function.
 * This is helpful, but not always the best approach.
 *
 * We have the possibility to "pass" data to our functions
 *
 * function name(parameter) {
 *  console.log(parameter);
 * }
 *
 * A parameter can be named like any other variable and can be used as a variable inside of the function
 *
 * We can give a value to our parameters by passing it when we call the function
 *
 * name(2); // 2 here is called an argument. This value will be assigned to the parameter
 *
 * */

// let user = "carlo";
// function sayHello() {
//     console.log(`hello ${user}`);
// }

// Create a function that accepts a "name" parameter and prints a "hello" message

// function sayHello(name) {
//   // let name;
//   console.log(`hello ${name}`);
// }

function sayHello(name) {
  if (name === undefined) {
    console.log("hello");
  } else {
    console.log(`hello ${name}`);
  }
}

sayHello("hiwa");
sayHello("carlo");
sayHello("john");
sayHello("michael");
sayHello();

// Create a function that accepts a "number" argument and prints its value doubled

function double(n) {
  if (n === undefined) {
    console.log("n should be a valid number");
  } else {
    console.log(n * 2);
  }
}

double(5);
double(100);
double(300);
double();

/*
 * Multiple parameters
 */

// Create a function that accepts 2 parameters and prints their sum

function sum(a, b) {
    console.log(a + b);
}

sum(2, 5);
sum(3, 10);
sum(1006, 978);

// What's the default value of a parameter?
