let me = [
  39,
  "Carlo",
  "Trimarchi",
  "Italian",
  "Messina",
  "green",
  "black",
  false,
  true,
  ["books", "comics", "music", "guitar", "tv series", "anime"],
  ["pizza", "pasta", "ice cream"],
];

console.log(me);

let person = {
  firstName: "Carlo", // comma here
  age: 39, // also here
  isVegetarian: true, // this is the last one, no comma
  lastName: "trimarchi",
};

let book = {
  title: "book title",
  pages: 192,
  year: 1999,
};

let movie = {
  title: "movie title",
  duration: 90,
  year: 1999,
};

console.log(person.firstName);
console.log(person.age);
console.log(person);

console.log(person["firstName"]);

person.age = 20;

console.log(person);

console.log(console);

let mathStuff = {
  length: 4,
  PI: 3.14,
  sum: function (a, b) {
    return a + b;
  },
  double: function (number) {
    return number * 2;
  },
};

console.log("math stuff", mathStuff);

// console["log"]("bla");

let numbers = [1, 2, 3];
numbers.length;

let person2 = {
  firstName: "Carlo", // comma here
  age: 39, // also here
  isVegetarian: true, // this is the last one, no comma
  lastName: "trimarchi",
};

let product = {
  type: "shoes",
  price: 59.99,
  colors: ["red", "green", "yellow"],
  // ...
};

let products = [
  { type: "shoes" },
  { type: "shirt" },
  { type: "t-shirt" },
  { type: "socks" },
  { type: "" },
];

// let movie = {
//   title: "movie title",
//   director: "...",
//   year: "...",
// };

let recipe = {
  name: "...",
  description: "...",
  ingredients: ["...", "..."],
  instructions: ["..."],
};

// let numbers = [1, 2, 3, 4, 5];
let objects = [{}, {}, {}, {}, {}];
let books = [
  { title: "book1", author: "author1" },
  { title: "book2", author: "author2" },
  { title: "book3", author: "author3" },
];

console.log(books[1]);
console.log("title of third book", books[2].title);

books[2]; // => {title: "book3"}
books[2].title; // => "book3"

let thirdBook = books[2];
console.log(thirdBook);
console.log(thirdBook.title);

function introduceMyself(firstName) {
  return `Hello, my name is ${firstName}`;
}

console.log(introduceMyself("carlo"));

let greetingMessage = introduceMyself("carlo");
console.log(greetingMessage);

function createPerson(firstName, lastName, age) {
  return { firstName: firstName, lastName: lastName, age: age };
}

let createPerson2 = (firstName, lastName, age) => {
  return { firstName: firstName, lastName: lastName, age: age };
}

function sum(a, b) {
    return a + b;
}

// "result" contains the result of the function call 
let result = sum(2, 4);
console.log("result", result);

let person3 = createPerson("john", "smith", 29);
console.log(person3);

let food = ["pizza", "pasta", "fruit", "ice cream"];
console.log(food[1]);
console.log(food[2]);

let food2 = [
  { name: "pizza", price: 9 },
  { name: "pasta", price: 6 },
];
console.log(food2[0]);
console.log(food2[1]);
