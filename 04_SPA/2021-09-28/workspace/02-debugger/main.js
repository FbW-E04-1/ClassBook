/**
 * Debugging is the process of finding and hopefully fixing errors
 *
 */

/**
 * in JavaScript 0 is considered a falsey value
 *
 * any number different than 0 is considered to be a truthy value
 *
 */

// let temperature = 35;

// debugger;
// let a = 5;
// let b = 10;
// let c;

// console.log(temperature);
// if ((temperature === 0)) {
//   console.log("it's freezing");
// } else if (temperature > 30) {
//   console.log("it's hot");
// } else if (temperature > 10) {
//   console.log("it's cold");
// }

// console.log("temperature is: ", temperature);

// for (let i = 0; i < 10; i++) {
//     debugger;
//     console.log(i);
// }

debugger;
function sum(a, b) {
  let result = a + b;
  return result;
}

let numbers = [1, 2, 3];
debugger;
for (let i = 0; i < numbers.length - 1; i++) {
  sum(numbers[i], numbers[i + 1]);
}

console.log('output');