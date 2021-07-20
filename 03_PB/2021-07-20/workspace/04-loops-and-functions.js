/* 
    Given an array of numbers as input, calculate the sum of all the numbers
*/

// let numbers = [1, 2, 3, 4, 5, 6];

// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }

// console.log("sum is", sum);

function sumNumbers(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

console.log(sumNumbers([1, 2, 3]));
console.log(sumNumbers([4, 7, 21]));