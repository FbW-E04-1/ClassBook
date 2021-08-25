/*
    Callback
*/

function printMessage() {
  console.log("Hello, I'm the callback");
}

function myFunction(anotherFunction) { // anotherFunction will become printMessage

  console.log("hello, I'm inside the function");


  anotherFunction(); // here we will call printMessage
}

let number = 5;
myFunction(number);









console.log("============================");

let strings = [
  "table",
  "fridge",
  "pen",
  "lamp",
  "box",
  "cat",
  "cement",
  "chair",
  "ceiling",
];

// a function that gives me back an array with words transformed to uppercase

function uppercase(strings) {
  let result = [];
  for (let string of strings) {
    result.push(string.toUpperCase());
  }
  return result;
}

console.log(uppercase(strings));

// function double(strings) {
//     let result = [];
//     for (let string of strings) {
//         result.push(string + string);
//     }
//     return result;
// }

// console.log(double(strings));

function double(string) {
  return string + string;
}

function map(strings, callback) {
  let result = [];
  for (let string of strings) {
    result.push(callback(string));
  }
  return result;
}

console.log(map(strings, double));
console.log(map(strings, (string) => string.toUpperCase()));
console.log(
  map(strings, function (string) {
    return string.toUpperCase();
  })
);
console.log(map(strings, (string) => string.toUpperCase() + string));
console.log(
  map(strings, (string) => string + string.split("").reverse().join(""))
);

console.log("================================");

/*
    Write a function that returns an array only containing strings longer than 4 letters 
*/

function stringLongerThan4(strings) {
  let result = [];
  for (let string of strings) {
    if (string.length > 4) {
      result.push(string);
    }
  }
  return result;
}

console.log(stringLongerThan4(strings));

/*
    Write a function that returns an array only containing strings that begin with the letter "c"
*/

// function startsWithC(strings) {
//     let result = [];
//     for (let string of strings) {
//         if (string[0] === "c") {
//             result.push(string);
//         }
//     }
//     return result;
// }

// console.log(startsWithC(strings));

function isLongerThan4(string) {
  return string.length > 4;
}

function startsWithC(string) {
  return string[0] === "c";
}

function filter(array, callback) {
  let result = [];
  /* for (let i = 0; i < array.length; i++) {
    if (callback(array[i]) === true) {
      result.push(array[i]);
    }
  }
  */
  for (let item of array) {
    if (callback(item) === true) {
      result.push(item);
    }
  }
  return result;
}


console.log(filter(strings, isLongerThan4));
console.log(filter(strings, startsWithC));




console.log(filter(strings, (string) => string.length < 4));
console.log(filter(strings, (string) => string[string.length - 1] === "e"));

console.log(filter([1, 2, 3, 4, 5, 6, 7, 8], (number) => number > 4));

console.log(
  filter([1, 2, 3, 4, 5, 6, 7, 8], function (number) {
    return (number > 4) === true;
  })
);
console.log(filter([1, 2, 3, 4, 5, 6, 7, 8], (number) => number % 2 === 0));


const newArray = [1, 2, 3];

function newFunction(array, callback) {
    let result = [];
    for (let item of array) {
        callback(item);
    }

}

newFunction(newArray);
console.log(newFunction([1, 2, 3], (number) => number > 4));