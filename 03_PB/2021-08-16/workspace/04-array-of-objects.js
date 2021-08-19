let products = [
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

console.log(products[1]);
console.log(products[products.length - 1]);
console.log(products[3]);
console.log(products[2]);
console.log(products[0]);

/* Print all the products inside a loop */
console.log(products[0]);
console.log(products[1]);
console.log(products[2]);
console.log(products[3]);

console.log(products);

console.log("start the loop");
for (let i = 0; i < products.length; i++) {
  // console.log(products[i]);
  // print all the product types 
  console.log(products[i].type);
  console.log(products[i].price);
  console.log('-----')
}

/* 
To get access to the last element, we need index 3
- we can use the number 3 directly
- or we can calculate the last element using the length of the array

The length of the array is 4

products.length // => 4

products.length - 1; // => 3

let lastIndex = products.length - 1;
console.log(lastIndex); // 3
*/

console.log(products.length);

let lastIndex = products.length - 1;
console.log(lastIndex); // 3

console.log(products[lastIndex]);
console.log(products[products.length - 1]);

/* 
    Exercise:

    - print the price of the shorts
    - print the name of the second product
    - print the name of the last product
    - print names and prices of every product
*/
