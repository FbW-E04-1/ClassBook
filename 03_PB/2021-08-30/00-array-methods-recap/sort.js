let numbers = [2, 6, 1, 0, 6, 234, 21, 59320, 54, 23, 677];
/**
 * -  2, 6, 1, 0, 6, 234, 21, 59320, 54, 23, 677
 *
 * 1) 2, 6, 1, 0, 6, 234, 21, 59320, 54, 23, 677
 *
 * 2) 2, 1, 6, 0, 6, 234, 21, 59320, 54, 23, 677
 *
 * 3) 2, 1, 6, 0, 6, 234, 21, 59320, 54, 23, 677
 *
 * 4) 1, 2, 6, 0, 6, 234, 21, 59320, 54, 23, 677
 *
 *
 */
let words = ["table", "chair", "glass", "bottle", "water", "phone", "zebra"];

// console.log(numbers.sort());
// console.log(words.sort());

/**
 * a - b > than 0, sort b before a
 * a - b < than 0, sort a before b
 * a - b === 0, doesn't do anything
 */

numbers.sort((a, b) => {
  console.log(a, b);
  return b - a;
});

console.log(numbers);

// words.sort((wordA, wordB) => {
//     if (wordA.startsWith("c")) {
//         return -1;
//     }
//     if (wordB.startsWith("p")) {
//         return 1;
//     }
//     if (wordB.startsWith("b")) {
//         return 0;
//     }
// });

// console.log(words);

let arr = [{ a: 1 }, { b: 2 }, { c: 6 }, { d: 0 }];

// output = d, a, b, c

arr.sort((firstEl, secondEl) => {
  let firstElValue = Object.values(firstEl); // [1]
  let secondElValue = Object.values(secondEl);
  return firstElValue[0] - secondElValue[0];
});
console.log(arr);

const products = [
  { type: "socks", price: 12 },
  { type: "shirt", price: 21 },
  { type: "jeans", price: 82 },
  { type: "skirt", price: 18 },
  { type: "shoes", price: 24 },
  { type: "jeans", price: 19 },
  { type: "skirt", price: 23 },
  { type: "socks", price: 3 },
  { type: "jeans", price: 42 },
];

products.sort(
  (firstProduct, secondProduct) => firstProduct.price - secondProduct.price
);

console.log(products);
