/*
    - make more exmaples of callbacks simulating the behaviour of filter and map
    - also a few examples with find
    - something more complicated using an array of objects (some products, filtering by price etc.)
*/

let texts = ["phone", "mail", "delivery address", "bunch of words"];

// get array of lengths of strings in the original array

/* 
    example:
    let texts = ["phone", "mail", "delivery address", "bunch of words"];
    result => [5, 4, 16, 14] 
*/

function getLengths(strings) {
  let stringsCopy = [...strings];
  for (let i = 0; i < stringsCopy.length; i++) {
    stringsCopy[i] = stringsCopy[i].length;
  }
  return stringsCopy;
}

let lengths = getLengths(texts);
console.log(lengths);

/* capitalize every string in the array

    example:
    let texts = ["phone", "mail", "delivery address", "bunch of words"];
    result => ["Phone", "Mail", "Delivery address", "Bunch of words"] 
*/

function capitalize(strings) {
  let stringsCopy = [...strings];
  for (let i = 0; i < stringsCopy.length; i++) {
    stringsCopy[i] = stringsCopy[i][0].toUpperCase() + stringsCopy[i].slice(1);
  }
  return stringsCopy;
}

let capitalized = capitalize(texts);
console.log(capitalized);

/* 
    Write a function that returns an array with only the initials for each word

    example:
    let texts = ["phone", "mail", "delivery address", "bunch of words"];
    result => ["p", "m", "d", "b"] 
*/

function getInitials(strings) {
  let stringsCopy = [...strings];
  for (let i = 0; i < stringsCopy.length; i++) {
    stringsCopy[i] = stringsCopy[i][0];
  }
  return stringsCopy;
}

let initials = getInitials(texts);
console.log(initials);

/*
    Write a function that transforms every string in the array to snake-case

    example:
    let texts = ["phone", "mail", "delivery address", "bunch of words"];
    result => ["phone", "mail", "delivery-address", "bunch-of-words"] 
*/

function toSnakeCase(strings) {
  let stringsCopy = [...strings];
  for (let i = 0; i < stringsCopy.length; i++) {
    let split = stringsCopy[i].split(" ");
    if (Array.isArray(split)) {
      stringsCopy[i] = split.join("-");
    }
  }
  return stringsCopy;
}

let snakeCased = toSnakeCase(texts);
console.log(snakeCased);

function toSnakeCaseCallback(string) {
  let split = string.split(" ");
  if (Array.isArray(split)) {
    split = split.join("-");
  }
  return split;
}

function applyFunctionToArray(strings, callback) {
  let stringsCopy = [...strings];
  for (let i = 0; i < stringsCopy.length; i++) {
    stringsCopy[i] = callback(stringsCopy[i]);
  }
  return stringsCopy;
}

let snakeCased2 = applyFunctionToArray(texts, toSnakeCaseCallback);
console.log(snakeCased2);

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

function getYellow(product) {
  return product.color === "yellow";
}

function filterProducts(products, callback) {
  let filteredProducts = [];
  for (let i = 0; i < products.length; i++) {
    let result = callback(products[i]);
    if (result) {
      filteredProducts.push(products[i]);
    }
  }
  return filteredProducts;
}

console.log(filterProducts(products, getYellow));
console.log(filterProducts(products, (product) => product.color === "red"));
