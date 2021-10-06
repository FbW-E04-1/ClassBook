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

function placeOrder(nextStep) {
  console.log("order placed");
  nextStep(deliverFood); // prepareFood(deliverFood)
}

function prepareFood(nextStep) {
  console.log("cooking food...");
  setTimeout(() => {
    console.log("food is ready");
    nextStep(eat); // deliverFood(eat);
  }, randomDuration());
}

function deliverFood(nextStep) {
  console.log("order being delivered");
  setTimeout(() => {
    console.log("order delivered");
    nextStep();
  }, randomDuration());
}

function readABook() {
  console.log("reading a book to pass the time");
}

function eat() {
  console.log("enjoying the food");
}

placeOrder(prepareFood);
readABook();
