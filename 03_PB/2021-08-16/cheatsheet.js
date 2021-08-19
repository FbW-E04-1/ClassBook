/* Declaring variables */

let price = 19.99;
let age = 27;
const name = "Rita";
const books = ["Gravity's Rainbow", "2666", "The Lathe of Heaven"];

/* Conditionals */

let temperature = 40;

if (temperature > 35) {
    console.log("hot");
} else if (temperature > 25) {
    console.log("nice");
} else if (temperature > 15) {
    console.log("good, could be warmer");
} else if (temperature > 5) {
    console.log("quite cold");
} else {
    console.log("it's freezing");
}

/* Ternary operator */


/* Strings */

let message = "Hello, world!";

// get the length of the string
let messageLength = message.length;
console.log(messageLength);

// access individual characters
message[0];
message[1];
message[2];

// use the length property to access the last element
message[message.length - 1];

/* Arrays */

let vegetables = ["zucchini", "carrot", "aubergine", "potato", "broccoli"];

// get the length of a string

let vegetablesLength = vegetables.length;
console.log(vegetablesLength);

// access individual elements of the array
vegetablesLength[0];
vegetablesLength[1];
vegetablesLength[2];

// access the last element of the array using the length property
vegetables[vegetables.length - 1];


/* Loops */

// Loop a definite amount of times

for (let i = 0; i < 10; i++) {
    console.log(i);
}

// loop over an array

let fruit = ['apple', 'banana', 'kiwi', 'pear'];

for (let i = 0; i < fruit.length; i++) {
    console.log(fruit[i]);
}

// loop over a string

let food = "pizza";
for (let i = 0; i < food.length; i++) {
    console.log(food[i]);
}
