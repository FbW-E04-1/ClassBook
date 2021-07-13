/* 
    if...else

    We can use if...else statements to run blocks of code conditionally, depending
    on some condition being true or false
*/

let isRainy = false;

if (isRainy) {
  console.log("stay home");
} else {
  console.log("go to the park");
}

let temperature = 35;
if (temperature > 30) {
  console.log("go to the beach");
}

// let day = "Tuesday";

// if (day === "Monday") {
//   console.log("pasta for lunch");
// } else if (day === "Tuesday") {
//   console.log("sandwich for lunch");
// } else if (day === "Wednesday") {
//   console.log("salad for lunch");
// } else {
//   console.log("I don't know yet");
// }

let age = 16;

if (age > 0 && age <= 3) {
  console.log("infant");
} else if (age > 3 && age <= 12) {
  console.log("child");
} else if (age > 12 && age <= 18) {
  console.log("teenager");
} else if (age > 18 && age <= 30) {
  console.log("young adult");
} else {
  console.log("adult");
}

let isOlderThan18 = false;

if (!isOlderThan18) {
  console.log("cannot drive yet");
}

let maxWidth = 1000;
let minWidth = 500;

if (minWidth > 600) {
  // ...
}
if (maxWidth > 600) {
  // ...
}

/* */

let day = "Tuesday";
let food = "something";

if (day === "Monday") {
  console.log("Today is: ", day);
  console.log("pasta for lunch");
  food = "pasta";
} else if (day === "Tuesday") {
  console.log("Today is: ", day);
  console.log("sandwich for lunch");
  food = "sandwich";
} else if (day === "Wednesday") {
  console.log("Today is: ", day);
  console.log("salad for lunch");
  food = "salad";
} else {
  console.log("Today is: ", day);
  console.log("I don't know yet");
  food = "unknown";
}

console.log(`Today is ${day}, I'm going to eat ${food}`);



let animal = "dog";

/* .... */

animal = "cat";




















