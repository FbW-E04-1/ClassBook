/* 
    1. Complete the code below to have a function that prints the number of times it's been called.
    
    For example:
    - the first time, it should print 1
    - the second time, it should print 2
    - and so on

    Hint: you don't need to use loops
*/

let counter = 0;
function myCounter() {
  counter++;
  return counter;
}

console.log(myCounter()); // 1
console.log(myCounter()); // 2
console.log(myCounter()); // 3

/*
    2. Create other two functions that do the exact same thing (counting the number of times they have been called), but the counter of one function should be independend from the one in the other

    For example:
    - if I call myCounter2() 3 times, I should see: 1, 2, 3
    - if I then call myCounter3() once, I will see 1
    - if I call myCounter2() again now, I should see 4
*/

let counter2 = 0;
function myCounter2() {
  counter2++;
  return counter2;
}

let counter3 = 0;
function myCounter3() {
  counter3++;
  return counter3;
}

console.log(myCounter2()); // 1
console.log(myCounter2()); // 2
console.log(myCounter3()); // 1
console.log(myCounter2()); // 3
console.log(myCounter3()); // 2
console.log(myCounter2()); // 4

/**
 * 1. avoid repeating the same code over and over again
 * 2. keep the counter variable inside the function
 */

console.log();
console.log();
console.log();
console.log("counter4");
function myCounter4() {
  let counter = 0;
  counter++;
  return counter;
}

console.log(myCounter4()); // 1
console.log(myCounter4()); // 2
console.log(myCounter4()); // 3

function functionMaker() {
  return function () {
    console.log("Hello");
  };
}

console.log(functionMaker()); // [Function (anonymous)]
let sayHello = functionMaker();
console.log(sayHello); // [Function (anonymous)]
sayHello(); // "Hello"

function functionMaker2() {
  let world = "world";
  return function () {
    console.log("Hello " + world);
  };
}

let helloWorld = functionMaker2();
helloWorld();

function makeCounter() {
  let counter = 0; // <- surrounding state
  return function () { // <- the function we're interested in
    counter++;
    return counter;
  };
}

let counterFunction1 = makeCounter();
console.log("counter 1", counterFunction1()); // 1
console.log("counter 1", counterFunction1()); // 2
console.log("counter 1", counterFunction1()); // 3

let counterFunction2 = makeCounter();
console.log("counter 2", counterFunction2()); // 1
console.log("counter 2", counterFunction2()); // 2
console.log("counter 2", counterFunction2()); // 3

/**
 * A closure is the combination of a function bundled together (enclosed)
 * with references to its surrounding state (the lexical environment).
 */


function outer() {
    let number = 0;
    console.log("inside outer", number);
    return function() {
        number++;
        console.log("inside inner", number);
    }
}


let inner = outer();
inner();
inner();
inner();
inner();


function gameMaker() {
    let score = 0;
    return () => {
        score++;
        return score;
    }
}

let player1Game = gameMaker();
let player2Game = gameMaker();

console.log(player1Game());
console.log(player2Game());
console.log(player2Game());
console.log(player2Game());
console.log(player1Game());