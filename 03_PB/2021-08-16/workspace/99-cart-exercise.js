/*
    Create a function that takes an array of products as an argument
    and returns the total price of the products

*/
let cart = [
  {
    type: "t-shirt",
    price: 9.99,
  },
  {
    type: "shoes",
    price: 19.0,
  },
  {
    type: "shorts",
    price: 14.99,
  },
  {
    type: "socks",
    price: 4.99,
  },
];

function calculateTotal(products) {
  // calculate and return the total
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    console.log(products[i].price);
    //total = total + products[i].price;
    total += products[i].price;
  }
  return parseFloat(total.toFixed(2));
}

// expected result: 48.97

console.log(calculateTotal(cart));
