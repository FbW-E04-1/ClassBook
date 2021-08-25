// declaring functions

function sum(a, b) {
    // console.log("inside the function", a + b);
    // return undefined;
    return a + b;
}

// sum(2, 5);

let result = sum(1, 3);

console.log(result);

let something = sum;

console.log(something);

console.log("calling sum", sum(2, 3));
console.log("calling something", something(2, 3));

let myMax = Math.max;

console.log(myMax(1, 2, 3));
// console.log("The result is:", result);

// function expression

// const sum2 = function(a, b) {
//     return a + b;
// }


// // arrow function
// const sum3 = (a, b) => {
//     return a + b;
// }











// return statement vs console.log()

