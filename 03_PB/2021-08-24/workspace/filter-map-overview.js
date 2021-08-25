let products = [
  {
    type: "t-shirt",
    price: 9.99,
    color: "red",
  },
  {
    type: "socks",
    price: 4.99,
    color: "blue",
  },
  {
    type: "jeans",
    price: 44.99,
    color: "black",
  },
  {
    type: "t-shirt",
    price: 14.99,
    color: "green",
  },
  {
    type: "t-shirt",
    price: 22.99,
    color: "blue",
  },
  {
    type: "jeans",
    price: 59.99,
    color: "blue",
  },
  {
    type: "skirt",
    price: 24.99,
    color: "yellow",
  },
  {
    type: "socks",
    price: 14.99,
    color: "yellow",
  },
];

/* 
    Array methods: 

    - .filter(): it applies a callback on every item of the array, and filters out some items
        - in the end we will have an array of the same length or smaller

    - .map(): it applies a callback on every item of the array to transform the items
        - in the end we will have an array of the same length, with items modified somehow
  */

// make the type of products uppercase
// filter or map? map()

function capitalizeType(product) {
  let productClone = { ...product };
  productClone.type = productClone.type.toUpperCase();
  return productClone;
}
// let capitalizeType = (product) => {
//   let productClone = { ...product };
//   productClone.type = productClone.type.toUpperCase();
//   return productClone;
// };

let capitalTypes = products.map(capitalizeType);
let capitalTypes2 = products.map((product) => {
  let productClone = { ...product };
  productClone.type = productClone.type.toUpperCase();
  return productClone;
});
console.log(capitalTypes);

// discount all prices that cost more than 30, by 50%
// filter or map?
function discount(product) {
  let clone = { ...product };
  if (clone.price > 30) {
    clone.price = clone.price / 2;
  }
  return clone;
}
let discountedProducts = products.map(discount);
console.log(discountedProducts);

// get an array of only jeans
// filter or map? filter

let jeans = products.filter((product) => product.type === "jeans");
console.log(jeans);
