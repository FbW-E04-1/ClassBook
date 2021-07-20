sum(5, 6);

function sum(a, b) {
  return a + b;
}

// sum2(2, 5); // error, the variable doesn't exist yet

const sum2 = function (a, b) {
  return a + b;
};

console.log(sum(2, 5));
console.log(sum2(2, 5));

/* Arrow function */

const sum3 = (a, b) => {
  return a + b;
};

/* If your arrow function contains only a return statement, 
you can remove the curly braces and the return keyword */

const sum4 = (a, b) => a + b;


console.log("arrow", sum3(2, 5));
console.log("arrow without return", sum4(2, 5));

const sayHi = () => {
  console.log("hi");
};



// let myFunction = () => {
//   console.log("this is my function");
// };

// myFunction = () => {
//   console.log("this is NOT my function anymore");
// };

// let myFunction2 = () => {
//   console.log("this is NOT my function anymore");
// }

// myFunction();
