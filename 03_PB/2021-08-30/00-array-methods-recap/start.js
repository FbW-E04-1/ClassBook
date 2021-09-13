/**
 *
 * foreach() -
 * filter() - returns a new array
 * find() - returns a single item
 * map() - returns a new array
 * reduce() - returns a number, string, array, object
 * sort() - changes the original array in place
 *
 */

/* 
A B C D ...
a b c d ...

ascending: 1 2 3 4 5 6 
descending: 6 5 4 3 2 1 
*/

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Foreach
 *
 */

let doubled = [];
numbers.forEach((number) => {
  doubled.push(number * 2);
});

console.log(numbers);
console.log(doubled);

/**
 * Map
 *
 * Applied to an array, it creates a new array containing the same number of items as the original array.
 * The items are transformed according to the function we pass as an argument
 */

// Our own map function

// 1. accepts an array and a function as arguments
function myMap(array, callback) {
  // 2. creates a new empty array where to save the result
  let result = [];
  // 3. iterates through the original array (the one in the arguments)
  for (let item of array) {
    // 4. calls the function (the callback) on every item of the original array
    let newItem = callback(item);
    // 5. pushes the result of the callback in the result array
    result.push(newItem);
  }
  // 6. returns the result array
  return result;
}

let doubled2 = myMap(numbers, (number) => number * 2);
console.log("numbers", numbers);
console.log("doubled2", doubled2);

let doubled3 = numbers.map((number) => number * 2);
console.log("doubled3", doubled3);

let words = ["table", "pen", "backpack", "painting", "chair"];

/*

table
- To capitalize the word we need to take the first letter and capitalize it

let uppercaseFirstLetter = word[0].toUpperCase(); // "T"

- we need to take the rest of the word after the first letter and concatenate it to the uppercase first letter

let restOfTheWord = word.slice(1); // "able"

let capitalizedWord = uppercaseFirstLetter + restOfTheWord; // "T" + "able" => "Table"
*/
let capitalized = words.map((word) => word[0].toUpperCase() + word.slice(1));
console.log(capitalized);

let initials = words.map((word) => word[0]);
console.log(initials);

let minusInitials = words.map((word) => word.slice(1));
console.log(minusInitials);

let lastLetters = words.map((word) => word[word.length - 1]);
let lastLetters2 = words.map((word) => word.slice(-1));
console.log(lastLetters);
console.log(lastLetters2);

const products = [
  { type: "socks", price: 12 },
  { type: "shirt", price: 21 },
  { type: "jeans", price: 82 },
  { type: "skirt", price: 18 },
  { type: "shoes", price: 24 },
  { type: "jeans", price: 19 },
  { type: "skirt", price: 23 },
  { type: "socks", price: 3 },
  { type: "jeans", price: 42 },
];

let productsWithCurrency = products.map((product) => {
  let productClone = { ...product };
  productClone.priceString = productClone.price + ",00 €";
  return productClone;
});
console.log(productsWithCurrency);

products.map((item, i, arr) => {
  console.log("item", item);
  console.log("index", i);
  console.log("array", arr);
});

// a-list-of-words = aListOfWords
// a-list-of-words => ["a", "list", "of", "words"]
// ["a", "list", "of", "words"] => ["a", "List", "Of", "Words"]
// ["a", "List", "Of", "Words"] => "aListOfWords"

function camelCase(string) {
  let splittedString = string.split("-");
  console.log(splittedString);
  //   let capitalized = splittedString.map((word, i) => {
  //     if (i === 0) {
  //       return word;
  //     } else {
  //       return word[0].toUpperCase() + word.slice(1);
  //     }
  //   });
  let capitalized = splittedString.map((word, i) =>
    i === 0 ? word : word[0].toUpperCase() + word.slice(1)
  );
  let joined = capitalized.join("");
  console.log(joined);
  return joined;
}
camelCase("a-list-of-words");

let episodes = [
  { title: "The beginning" },
  { title: "The run" },
  { title: "The surprise" },
  { title: "The end" },
];

let modifiedEpisodes = episodes.map((episode, i, array) => {
  let episodeClone = { ...episode };
  episodeClone.number = `Episode ${i + 1} of ${array.length}`;
  if (i < array.length - 1) {
    episodeClone.nextEpisode = array[i + 1].title;
  }

  if (i > 0) {
    episodeClone.previousEpisode = array[i - 1].title;
  }
  return episodeClone;
});

console.log(modifiedEpisodes);

/**
 * Filter
 * Applied to an array, it creates a new array containing only the items that satisfies a certain condition based on the
 * result of the function we pass as an argument.
 */

// Our own filter function

// 1. accepts an array and a function as arguments
function myFilter(array, callback) {
  // 2. creates a new empty array where to save the result
  let result = [];
  // 3. iterates through the original array (the one in the arguments)
  for (let item of array) {
    // 4. calls the function (the callback) on every item of the original array
    let condition = callback(item);
    // 5. if the result of the callback is true, it pushes the current item in the result array
    if (condition === true) {
      result.push(item);
    }
  }
  // 6. returns the result array
  return result;
}

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
let evenNumbers = myFilter(numbers, (number) => number % 2 === 0);
console.log(evenNumbers);

let evenNumbers2 = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers2);
let evenNumbers3 = numbers.filter(isEven);
console.log(evenNumbers3);
console.log(words);

// let words = [ 'table', 'pen', 'backpack', 'painting', 'chair' ]

let longWords = words.filter((word) => word.length > 5);
console.log(longWords);

let containLetterC = words.filter((word) => word.includes("c"));
console.log(containLetterC);

let costMoreThan15 = products.filter((product) => product.price > 15);
console.log(costMoreThan15);

let jeansOrShirt = products.filter(
  (product) => product.type === "jeans" || product.type === "shirt"
);
console.log(jeansOrShirt);

let modifiedProducts2 = products
  .filter((product) => product.type === "jeans" || product.type === "shirt")
  .map((product) => {
    let clone = { ...product };
    clone.priceString = clone.price + ",00 €";
    return clone;
  });
console.log(modifiedProducts2);

let skipProducts = products.filter((product, i) => i % 2 === 0);
console.log(skipProducts);



/**
 * Find
 * Applied to an array, it returns the first item that satisfies a certain condition based on the
 * result of the function we pass as an argument.
 * It's very similar to filter: the difference is that instead of returning a new array, it returns a single value
 */

// Our own find function

// 1. accepts an array and a function as arguments
function myFind(array, callback) {
  // 2. iterates through the original array (the one in the arguments)
  for (let item of array) {
    console.log("current item", item);
    // 3. calls the function (the callback) on every item of the original array
    let condition = callback(item);
    // 4. the first time that the callback returns true, it returns the current item
    if (condition === true) {
      return item;
    }
  }
}

let firstEvenNumber = myFind(numbers, (number) => number % 2 === 0);
let firstEvenNumber2 = numbers.find((number) => number % 2 === 0);
console.log(firstEvenNumber);
console.log(firstEvenNumber2);

let firstEvenNumberAfter6 = numbers.find(
  (number) => number % 2 === 0 && number > 6
);
console.log(firstEvenNumberAfter6);

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let firstEvenNumberAfterPosition2 = numbers.find(
  (number, index) => number % 2 === 0 && index > 1
);
console.log(firstEvenNumberAfterPosition2);

/**
 * Reduce
 *
 */

// a function that returns the sum of numbers inside of an array
function sumNumbers(array) {
  let result = 0; // accumulator, initial value
  for (let item of array) {
    result += item;
  }
  return result;
}

console.log("sum", sumNumbers([1, 2, 3]));

// a function that concatenates an array of strings

function concatenateStrings(array) {
  let result = "";
  for (let item of array) {
    result += item; // result = result + item
  }
  return result;
}

console.log("concatenate", concatenateStrings(["a", "b", "c", "d"]));

// const products = [
//     { type: "socks", price: 12 },
//     { type: "shirt", price: 21 },
//     { type: "jeans", price: 82 },
//     { type: "skirt", price: 18 },
//     { type: "shoes", price: 24 },
//     { type: "jeans", price: 19 },
//     { type: "skirt", price: 23 },
//     { type: "socks", price: 3 },
//     { type: "jeans", price: 42 },
//   ];

// get the total price of products

function calculateTotal(array) {
  let result = 0;
  for (let item of array) {
    result += item.price;
  }
  return result;
}
console.log("total", calculateTotal(products));

function myReduce(array, callback, initialValue) {
  let result = initialValue;
  for (let item of array) {
    result = callback(result, item);
  }
  return result;
}

// numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// numbers: is the first parameter (it will be assigned to array)
// (acc, currentValue) => acc + currentValue: is the second parameter, it will be the callback
// 0: is the third parameter, it will be the initialValue
let sumResult = myReduce(numbers, (acc, currentValue) => acc + currentValue, 0);
console.log("sum", sumResult);

let concatenateResult = myReduce(
  words,
  (acc, currentValue) => acc + currentValue,
  ""
);
console.log("concatenate", concatenateResult);

function sum(a, b) {
  return a + b;
}
let sumResult2 = myReduce(numbers, sum, 0);
console.log("sum");

let sumResult3 = numbers.reduce((acc, currentValue) => acc + currentValue, 0);
console.log(sumResult3);

let concatenateResult3 = words.reduce((a, b) => a + b, "");
console.log(concatenateResult3);

let productsTotal = products.reduce(
  (acc, currentItem) => acc + currentItem.price,
  0
);
console.log("products total", productsTotal);

console.log(products);
// [
//     { type: 'socks', price: 12 },
//     { type: 'shirt', price: 21 },
//     { type: 'jeans', price: 82 },
//     { type: 'skirt', price: 18 },
//     { type: 'shoes', price: 24 },
//     { type: 'jeans', price: 19 },
//     { type: 'skirt', price: 23 },
//     { type: 'socks', price: 3 },
//     { type: 'jeans', price: 42 }
//   ]

/**
 * {
 *  socks: 15,
 *  shirt: 21,
 *  jeans: 143,
 *  skirt: ..
 *  shoes:
 * }
 *
 */

let person = { firstName: "john", lastName: "smith" };

person.firstName;
person["firstName"];

let propertyName = "firstName";
console.log(person[propertyName]);

let groupedProducts = products.reduce((acc, currentItem) => {
  console.log("type", currentItem.type);
  if (acc[currentItem.type] === undefined) {
    acc[currentItem.type] = currentItem.price; // acc["socks"], acc["jeans"], ...
  } else {
    acc[currentItem.type] += currentItem.price;
  }
  return acc;
}, {});

/**
 * acc = {}
 *
 * currentItem = {type: "socks", price: 3}
 *
 * does acc have a property called "socks"? => no
 * so we add a new property and we initialize it to its price
 * acc[currentItem.type] = currentItem.price; // acc.socks = 3;
 *
 * ----
 *
 * acc = {socks: 3}
 *
 * currentItem = {type: "jeans", price: 19}
 *
 * does acc have a property called "jeans"? => no
 * so we add a new property and we initialize it to its price
 * acc[currentItem.type] = currentItem.price; // acc.jeans = 19;
 *
 * ---
 *
 * acc = {socks: 3, jeans: 19}
 *
 * currentItem = {type: "socks", price: 12}
 *
 * does acc have a property called "socks"? => yes
 * instead of creating a new property, we use the existing one to increment its value
 * acc[currentItem.type] += currentItem.price; // acc.socks += 12
 *
 * acc = {socks: 15, jeans: 19}
 * ---
 *
 * ...
 *
 */

console.log(groupedProducts);

/*
{
  socks: {
      price: 15,
      quantity: 2
  },
  shirt: {
      price: 21,
      quantity: 1
  },
  jeans: {
      price: 143,
      quantity: 3,
  }
  skirt: ..
  shoes:
 }

*/
let groupedProductsWithQuantity = products.reduce((acc, currentItem) => {
  console.log("type", currentItem.type);
  if (acc[currentItem.type] === undefined) {
    acc[currentItem.type] = {
      price: currentItem.price,
      quantity: 1,
    }; // acc["socks"], acc["jeans"], ...
  } else {
    acc[currentItem.type].price += currentItem.price;
    acc[currentItem.type].quantity++;
  }
  return acc;
}, {});
console.log(groupedProductsWithQuantity);

/**
 *  "table", "pen", "backpack", "painting", "chair"
 *
 * initialValue = ""
 * result = initialValue; // ""
 *
 * loop:
 *
 * 1. result = result + item; // result = "" + "table"
 * result = "table"
 *
 * 2. result = result + item; // result = "table" + "pen"
 * result = "tablepen"
 *
 * 3. result = result + item; // result = "tablepen" + "backpack"
 * result = "tablepenbackpack"
 *
 * ...
 */


/**
 * Sort
 *
 */

// ascending order

// descending order

/**
 * examples using index
 */




