let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/* 
    Write a function that takes an array of numbers in input,
    and returns a new array containing the numbers multiplied by 2

    example:
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    result => [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

 */

function double(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(array[i] * 2);
  }
  return result;
}

let resultDouble = double(numbers);

console.log("result array", resultDouble);
console.log("original array", numbers);

/* 
    Write a function that takes an array of numbers in input,
    and returns a new array containing the numbers multipled by 3 

    example:
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    result => [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]

 */

function triple(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(array[i] * 3);
  }
  return result;
}

let resultTriple = triple(numbers);
console.log(resultTriple);

/* 
    Write a function that takes an array of numbers in input,
    and returns a new array containing the square of each number

    example:
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    result => [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

 */

function square(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    //result.push(array[i] * array[i]);
    result.push(Math.pow(array[i], 2));
  }
  return result;
}

let resultSquare = square(numbers);
console.log(resultSquare);

function multiplyBy(array, multiplier) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(array[i] * multiplier);
  }
  return result;
}

console.log(multiplyBy(numbers, 2));
console.log(multiplyBy(numbers, 3));
console.log(multiplyBy(numbers, 10));


