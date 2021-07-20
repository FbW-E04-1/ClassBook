/* 
    Create a function that takes an array of numbers as a parameter
    and returns the average

    Example:
    average([2, 4, 6]); // 4
    average([2, 4]); // 3
    average([2, 4, 9]); // 5

    How to calculate the average of a list of numbers?
    1. calculate the sum of the numbers (ex: 1, 2, 3 => 6)
    2. divide the sum, by the amount of numbers that we have (ex: 6 / 3 = 2)
*/

// function sumNumbers(numbers) {
//   let sum = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   return sum;
// }

// function average(numbers) {
//   let sum = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }

//   let result = Math.floor(sum / numbers.length);
//   return result;
// }

/* Optimize average and sum functions */

function sumNumbers(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

function average(numbers) {
  console.log(sumNumbers(numbers));

  /* Store the result of the sumNumbers() call inside the variable "sum" */
  let sum = sumNumbers(numbers);

  let result = Math.floor(sum / numbers.length);
  return result;
}

console.log(average([2, 4, 6])); // 4
console.log(average([2, 4])); // 3
console.log(average([2, 4, 9])); // 5
console.log(average([2, 16, 100, 60, 32, 12, 8])); //

console.log(sumNumbers([2, 4, 9]));
let result = sumNumbers([2, 4, 9]);
console.log("result", result);
