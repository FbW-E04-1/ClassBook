/* 
    Create a function that goes through every element in the array and 
    applies another function to each element
*/

/*
function double(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
      result.push(array[i] * 2);
    }
    return result;
  }

function triple(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
      result.push(array[i] * 3);
    }
    return result;
  }
  */
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function double(number) {
  return number * 2;
}
function triple(number) {
  return number * 3;
}
function square(number) {
  return number * number;
}

// let anotherFunction = double;
// anotherFunction(2);

function iterator(array, callback) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    // result.push(array[i] * 2);
    // result.push(double(array[i]));
    // result.push(myFunction(array[i]));
    let newValue = callback(array[i]);
    result.push(newValue);
  }
  return result;
}

console.log(iterator(numbers, double));
console.log(iterator([2, 43, 6, 7], double));
console.log(iterator([100, 430, 16, 27], double));
console.log(iterator(numbers, triple));
console.log(iterator(numbers, square));
console.log(iterator(numbers, (number) => number + number))

console.log(iterator(numbers, (number) => number * 100))
console.log(iterator(numbers, (number) => number + 102))
console.log(iterator(numbers, (number) => number + 102))
console.log(iterator(numbers, (number) => number + 102))
console.log(iterator(numbers, (number) => number + 102))
console.log(iterator(numbers, (number) => number + 102))

// function call vs assigning function to a new variable

// passing functions as parameters
