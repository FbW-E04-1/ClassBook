// To create a function we can use a function declaration.

/* Syntax:
 *
 * To declare a function we need:
 * - the `function` keyword
 * - the function name (can be any valid variable name in JavaScript)
 * - a pair of parenthesis
 * - a pair of curly brackets that contain the body (the code) of the function
 * - the body of the function <- this is the code that will get executed when we use a function
 *
 */

// function name() {
//     // body of the function
// }


function sayHello() {
    console.log("hello");
    console.log("hello");
    console.log("hello");
    console.log("hello");
    console.log("hello");
    console.log("hello");
}

sayHello(); // <- function call, necessary to execute the code inside of the function
sayHello();
sayHello();
sayHello();
sayHello();

/* 
 * Function call
 *
 * Defining a function doesn't automatically execute it. What happens with a function definition is that
 * now we have a function ready to use.
 *
 * In order to execute the code inside of a function, we need to `call` it.
 * To do so, we write the name of the function, followed by parenthesis.
 *
 * name(); // <- function call, the code inside the body of the function will be executed
 *
 * */


// Create a function that prints a simple message to the console

function printMessage() {
    console.log("hello world");
}

printMessage();

/*
 * Functions and scope
 */

// Create a function that says hello to a user using a global variable

let firstName = "carlo";

function sayHelloToUser() {
    console.log(`hello ${firstName}`);
}

sayHelloToUser();



// Create a function that uses changes the value of a global variable from the inside

let n = 0;

function increaseBy1() {
    //n = n + 1;
    //n += 1;
    n++;
    console.log("inside the function", n); // <- 
}
increaseBy1();
increaseBy1();
increaseBy1();
increaseBy1();

console.log("outside the function", n); // <- 

 

// Create a function that declares a new variable with the same name of a global one


let x = 10;

function printNumber() {
    let x = 5;
    console.log(x);
}

printNumber(); // 5 or 10? -> 5

console.log(x); // 5 or 10? -> 10
