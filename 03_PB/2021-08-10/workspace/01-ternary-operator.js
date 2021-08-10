/* 
    Ternary operator

    condition ? expression1 : expression2

    if condition is true, JavaScript executes expression1, otherwise it executes expression2
*/

let isRaining = false;
let message = "";

// if (isRaining) {
//     message = "take an umbrella";
// } else {
//     message = "you don't need an umbrella";
// }

// console.log(message);

// isRaining ? console.log("take an umbrella") : console.log("you don't need an umbrella");

message = isRaining ? "take an umbrella" : "you don't need an umbrella";

console.log(message);



// -----------------------------------------


function getFee(isMember) {
  return isMember ? "$2.00" : "$10.00";
}

// function getFee(isMember) {
//     let fee;

//     if (isMember) {
//         fee = '$2.00';
//     } else {
//         fee = "$10.00";
//     }
//     return fee;
//   }
console.log(getFee(true));
// expected output: "$2.00"

console.log(getFee(false));
// expected output: "$10.00"

console.log(getFee(null));

// -------------------------------------------

// ternary operator: example with items in cart message

/*
    We want to print a message based on the value of a variable count:

    - You have 1 item in your cart
    - You have 2 items in your cart
    - You have 0 items in your cart
*/

let count = 0;
// let itemWord = "";

// if (count > 1) {
//     itemWord = "items";
// } else {
//     itemWord = "item";
// }
// let cartMessage = `You have ${count} ${itemWord} in your cart`;

let cartMessage = `You have ${count} ${
  count > 1 || count === 0 ? "items" : "item"
} in your cart`;

console.log(cartMessage);

/* 
    If count is larger than 1 or count is equal to 0, give me "items"
    else (otherwise) give me "item"
*/
let word = count > 1 || count === 0 ? "items" : "item";
