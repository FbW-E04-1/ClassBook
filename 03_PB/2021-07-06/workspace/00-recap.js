/* numbers */
let number = 42;
let height = 1.85;
let temperatureInBerlin = -10;

/* strings */
let string = "This is a string";
let emptyString = "";
let anotherEmptyString = "";
let date = "2021-07-06";

/* booleans */

// let married = true;

let isMarried = false;
let isSleeping = true;
let isChecked = true;
let isSent = false;
let hasEnoughCredit = false;
let isOlderThan18 = true;

/* arrays */

let furniture = ["desk", "chair", "shelves", "couch"];
// let books = ["book1", "book2", "book3"];
let books = [
  { title: "The lord of the flies" },
  {
    /* another book */
  },
  {
    /* another book */
  },
];
let recipes = ["recipe", "recipe", "recipe"];
let warmestYearIn2000 = [2021, 2019, 2015];
let carClasses = [2, 5, 7, 9];

let personArray = [
  "Carlo",
  40,
  "green",
  "black",
  "brown",
  true,
  false,
  true,
  45,
];

/* object */

/* 
address:
  street
  street number
  apartment
  zip code
  city
*/
let person = {
  name: "Carlo",
  age: 40,
  favouriteColor: "green",
  hairColor: "black",
  eyesColor: "brown",
  shoeSize: 45,
  isMarried: false,
  address: {
    street: "Blablastr.",
    streetNumber: "21",
    zip: "123456",
    city: "Berlin",
  },
  hobbies: ["reading", "comics", "music", "guitar"],
};

let book = {
  title: "The handmaid's tale",
  author: "Margaret Atwood",
};

let movie = {};
let song = {};
let identity = {};

/* ------------------------------ */

/* 
>
>=

Strict equality <-- use this
===

Equality
==

!==
*/

"C" === "c"; // false

"" === ""; // true

"" === ""; // true

2 - 1 === 1; // true

"2" !== 2; // true

true === true; // true

false === false; // true

"c" + "a" + "r" === "car"; // true

/* ------------------- */

let budget = 27;

let applePrice = 1;
let bananaPrice = 2;
let breadPrice = 4;
let tomatoPrice = 3;

let total = applePrice * 5 + bananaPrice * 1 + breadPrice * 1 + tomatoPrice * 5;
console.log("total", total);

let isBudgetEnough = budget >= total;
console.log("hasEnoughMoney", isBudgetEnough);

console.log("Total price for shopping is:", total + "€");
console.log("Do I have enough money for buying everything?", isBudgetEnough);

/* ----------------------------- */

let laps = 0;

laps++;
laps--;

console.log(laps); // 0

/* --------------------- */

let money = 50;
let prize = 25;

money += prize; // money = money + prize

console.log(money); // 75

// I want to share the money with 3 friends

let friends = 3;
money /= friends;

console.log(money); // 25
