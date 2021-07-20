/* 
    Loops 

    - while
    - for
*/

/*

// code inside the if will be executed 0 or 1 time, only if the condition is true
if (condition) {
    // code to execute
}

// the code inside the while statement will be executed 0 or many times, 
// as long as the condition is tru
while (condition) {
    // code 
}

*/

if (2 < 4) {
  console.log("inside bla");
}
console.log("outside bla");

// while (2 < 4) {
//     console.log("while bla");
// }

console.log("----------------");

let isLoggedIn = true;

while (isLoggedIn) {
  console.log("hello");
  isLoggedIn = false;
}

console.log("----------------");

/*
    3 parts of loops

    - initialization
    - condition
    - increment (update)
*/

let counter = 100; // initialization
while (counter >= 0) {
  // condition
  console.log(counter);
  // counter++; // increment
  // counter = counter + 1;
  // counter += 1;
  counter -= 3;
}

console.log("----------------");

/*
- initialize something to 0
- count up to a certain point
- increment something by 1
*/

for (let i = 0; i < 10; i = i + 1) {
  console.log(i);
}

for (let i = 0; i < 10; i++) {
  console.log(i);
}

for (let bla = 0; bla < 10; bla++) {
  console.log(bla);
}

console.log("----------------");

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}

console.log("----------------");

for (let i = 0; i < 10000; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

console.log("----------------");

let letters = ["a", "b", "c", "d", "e"];

// console.log(letters[0]); // a
// console.log(letters[3]); // d
// console.log(letters[4]); // e
// console.log(letters[letters.length - 1]); // e

for (let i = 0; i < letters.length; i++) {
  console.log(letters[i]);
}

console.log("----------------");

/* 
    I want to know if every number inside the array is even

    - if they are, "answer" should be true
    - otherwise false
*/
let numbers = [2, 4, 6, 7, 8, 10, 12];
let answer = true;

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         answer = true;
//     } else {
//         answer = false;
//         break;
//     }
// }

for (let i = 0; i < numbers.length; i++) {
  console.log("iteration number: ", i);
  if (numbers[i] % 2 !== 0) {
    answer = false;
    console.log(numbers[i]);
    break;
  }
}

console.log("Are all numbers even?", answer);

console.log("--------");

// let fruit = "Apples";

// switch (fruit) {
//   case "Oranges":
//     console.log("Oranges are $0.59 a pound.");
//     break;
//   case "apples":
//   case "Apples":
//     console.log("Apples are $1.59 a pound.");
//     break;
//   case "Bananas":
//     console.log("Bananas are $1.59 a pound.");
//     break;
// }
