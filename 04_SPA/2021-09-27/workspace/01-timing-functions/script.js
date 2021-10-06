/**
 * If I have a function that outputs a message
 * after a certain amount of time, how can I execute
 * another function right after the first one has finished?
 */

let msDuration = (max) => Math.ceil(Math.random() * max) * 1000;

// function longFunction() {
//   setTimeout(() => {
//     console.log("long function finished");
//   }, msDuration(10));
// }

function longFunction() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("long function finished");
      resolve();
    }, msDuration(10));
  });
}

function sayHi(bla) {
  console.log("hi");
}

longFunction().then(sayHi);
// sayHi();
