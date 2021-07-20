/*
printExponentialValues(2, 5) => 2 * 2 * 2 * 2 * 2 =>

result = 1, x = 2

1. 2            // 2 result = 1 * 2 => 2, x = 2
2. 2 * 2        // 4 result = 2 * 2 => 4
3. 2 * 2 * 2    // 8 result = 4 * 2 => 8
4. 2 * 2 * 2 * 2   // 16  result = 8 * 2 => 16
5. 2 * 2 * 2 * 2 * 2   // 32  result = 16 * 2 => 32

/*

y
1. x
2. x * x
3. x * x * x

*/

let result = 1;

function printExponentialValues(x, y) {
    let string = "";
    for (let i = 0; i < y; i++) {
        result = result * x;
        console.log("result", result);
        string += result + " "; // string = string + result
    }
    return string;
}

console.log(printExponentialValues(2, 5));
console.log("result", result);
console.log(printExponentialValues(3, 3));

// a loop is a way to repeat a block of code a certain number of times
// for (let i = 0; i < 10; i++) {
//   // repeat this code
// }

// do something here
// do something else here
// do this other stuff

// do something here
// do something else here
// do this other stuff

// let cart = [9.99, 19.99, 29.99, 2.99, 3.99];
let cart = [47.95, 52.45, 17.99];
// let cart = [];
// let cartTotal = 0;

function calculateCartTotal(productsInCart) {
  let cartTotal = 0;
  for (let i = 0; i < productsIncart.length; i++) {
    cartTotal += productsInCart[i];
  }
  console.log(cartTotal);
  return cartTotal;
}

// calculateCartTotal(cart);