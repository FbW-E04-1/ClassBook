let myPromise = new Promise(function (nextStep) {
  setTimeout(() => {
    console.log("hey");
    nextStep();
  }, 2000);
});

myPromise.then(() => {
  console.log("I go first");
});

console.log("I really go first")

// console.log(myPromise);

// setTimeout(() => {
//     console.log("hey")
// }, 2000);
