/**
 * Synchronous vs Asynchronous
 *
 *
 */

// setTimeout(() => {
//   console.log("hello");
// }, 3000);

// console.log("I go first!");

let randomDuration = () => Math.ceil(Math.random() * 5) * 1000;

function placeOrder(callback) {
  console.log("order placed");
  console.log("preparing the order...");
  setTimeout(() => {
    console.log("order being delivered");
    setTimeout(() => {
      console.log("order delivered");
      callback();
    }, randomDuration());
  }, randomDuration());
}

function readABook() {
  console.log("reading a book to pass the time");
}

function eat() {
  console.log("enjoying the food");
}

placeOrder(eat);
readABook();
