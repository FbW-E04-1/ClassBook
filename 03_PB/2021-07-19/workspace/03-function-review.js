/*
 *
 * Look at the function below:
 *
 * 1. what's the function name?
 * 2. what's the function body?
 * 3. what's the function definition/declaration?
 * 4. how can we call this function?
 *
 */

function line() {
    console.log("------------------------------------");
}

line();
line();
line();



/*
 *
 * 1. looking at the function declaration, what are "name" and "city"?
 * 2. looking at the function call, what are "Carlo" and "Berlin"?
 *
 */

function introduce(name, city) { // name and city are parameters
    console.log(`Hi, my name is ${name} and I live in ${city}`);
}

introduce("Carlo", "Berlin"); // "Carlo" and "Berlin" are arguments
introduce("Laura", "Munich"); 
introduce("Laura", "Munich"); 
introduce("Laura", "Munich"); 
introduce("Laura", "Munich"); 

// console.log(`Hi, my name is Carlo and I live in Berlin`);
// console.log(`Hi, my name is Laura and I live in Munich`);
// console.log(`Hello, my name is Laura and I live in Munich`);
// console.log(`Hello, my name is Laura and I live in Munich`);
// console.log(`Hello, my name is Laura and I live in Munich`);

line();
line();
line();