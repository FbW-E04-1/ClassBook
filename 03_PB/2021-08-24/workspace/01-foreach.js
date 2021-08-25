/*
    forEach()

    forEach is an array method that loops through every item in the array and applies a function to each one of them
*/

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function double(number) {
  return number * 2;
}

for (let number of numbers) {
  console.log("number is", number);
}

numbers.forEach(function (number) {
  console.log("number is", number);
});

function printNumber(number) {
  console.log(number);
}

console.log("named callback");
numbers.forEach(printNumber);

let strings = ["cat", "dog", "giraffe"];

strings.forEach(function (item) {
  console.log("item is", item);
});

strings.forEach((item) => {
  console.log("item is", item);
});

let result = [];
numbers.forEach(function (number, index) {
  console.log("index", index);
  result.push(number * 2);
});

console.log(result);

let result2 = [];
for (let number of numbers) {
  result2.push(number * 2);
}

console.log(result2);



