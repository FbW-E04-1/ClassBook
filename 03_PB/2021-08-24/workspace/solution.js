// exercise 1

function done() {
  return "done!";
}
function finished() {
  return "finished counting for today";
}
function nap() {
  return "can take a nap now";
}

// now "nap2" is the same as "nap"
let nap2 = nap;

nap2();
nap();

function basicLoop(callback1, callback2, callback3) {
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
  console.log(callback1()); // done()
  console.log(callback2()); // finished()
  console.log(callback3()); // nap()
}

basicLoop(done, finished, nap);
// basicLoop(finished);
// basicLoop(nap);

// basicLoop(() => "arrow function message");
// basicLoop(function () {
//   return "anonymous function message";
// });

console.log("exercise 2");

let numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 15, 17, 18, 19, 20,
];

let double = (number) => number * 2;
let square = (number) => number * number;
let evenOr0 = (number) => (number % 2 === 0 ? number : 0);

// function evenOr0(number) {
//   if (number % 2 === 0) {
//     return number;
//   } else {
//     return 0;
//   }
// }
function map(array, callback) {
  let result = [];
  for (let item of array) {
    // result.push(item * 2);
    // result.push(item * item);
    // result.push(item % 2 === 0 ? item : 0);

    // result.push(double(item));
    // result.push(square(item));
    // result.push(evenOr0(item));
    result.push(callback(item));
  }
  return result;
}

console.log(map(numbers, double));
console.log(map(numbers, square));
console.log(map(numbers, evenOr0));
//create an array with all the numbers doubled
//create an array with the square of each number
//create an array where all even numbers remain untouched, and odd numbers are replaced by 0

// exercise 3

// return a new array containing only even numbers
// return a new array containing only numbers bigger than 10
// return a new array containing only numbers multiples of 5

let isEven = (number) => number % 2 === 0;
let isBiggerThan10 = (number) => number > 10;
let isMultipleOf5 = (number) => number % 5 === 0;

function filter(array, callback) {
  let result = [];
  for (let item of array) {
    // if (item % 2 === 0) {
    //   result.push(item);
    // }
    // if (item > 10) {
    //   result.push(item);
    // }
    // if (item % 5 === 0) {
    //   result.push(item);
    // }

    // if (isEven(item)) {
    //   result.push(item);
    // }
    // if (isBiggerThan10(item)) {
    //   result.push(item);
    // }
    // if (isMultipleOf5(item)) {
    //   result.push(item);
    // }
    if (callback(item) === true) {
      result.push(item);
    }
  }
  return result;
}

console.log(filter(numbers, isEven));
console.log(filter(numbers, isBiggerThan10));
console.log(filter(numbers, isMultipleOf5));

console.log(filter(numbers, (number) => number % 2 === 1));
console.log(filter(numbers, (number) => number < 5));

// exercise 4

let products = [
  {
    type: "t-shirt",
    price: 9.99,
    color: "red",
  },
  {
    type: "socks",
    price: 4.99,
    color: "blue",
  },
  {
    type: "jeans",
    price: 44.99,
    color: "black",
  },
  {
    type: "t-shirt",
    price: 14.99,
    color: "green",
  },
  {
    type: "t-shirt",
    price: 22.99,
    color: "blue",
  },
  {
    type: "jeans",
    price: 59.99,
    color: "blue",
  },
  {
    type: "skirt",
    price: 24.99,
    color: "yellow",
  },
  {
    type: "socks",
    price: 14.99,
    color: "yellow",
  },
];

let isTShirt = (item) => item.type === "t-shirt"; 
let isColorYellow = (item) => item.color === "yellow"; 
let costsMoreThan10 = (item) => item.price > 10; 

function productFilter(array, callback) {
  let result = [];
  for (let item of array) {
    // if (item.type === "t-shirt") {
    //   result.push(item);
    // }
    // if (item.color === "yellow") {
    //   result.push(item);
    // }
    // if (item.price > 10) {
    //   result.push(item);
    // }
    if(callback(item) === true) {
      result.push(item);
    }
  }

  return result;
}

console.log("is tshirt", filter(products, isTShirt));
console.log(filter(products, isColorYellow));
console.log(filter(products, costsMoreThan10));

console.log(filter(products, (item) => item.price < 10));


console.log(filter(products, (item) => item.color === "yellow" && item.price < 10));
//get a new array containing only products of type t-shirt
//get a new array of only products of color yellow
//get a new array of products that cost more than 10





let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];

function profile(user) {
  return {
    fullName: `${user.name} ${user.surname}`,
    id: user.id
  }
}

let usersMapped = users.map(profile);

console.log(usersMapped[0].id); // 1
console.log(usersMapped[0].fullName); // John Smith