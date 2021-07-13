/*
    Let a be the first input. 
    Let b be the second input. 

    If a smaller than b, print a. 
    otherwise, print b.
*/
// let a = 2;
// let b = 2;

// if (a <= b) {
//     console.log("the minimum is: a", a);
// } else {
//     console.log("the minimum is: b", b);
// }

let a = 10;
let b = 2;
let result = null;
let minimumVariable = "";

if (a <= b) {
    let result; // <- this would be local
    result = a; // <- result here is the global one
    minimumVariable = "a";
} else {
    result = b;
    minimumVariable = "b";
}

console.log(`The minimum is "${minimumVariable}" with a value of: ${result}`);