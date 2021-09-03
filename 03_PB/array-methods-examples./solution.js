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

// Capitalize the type of each product
let capitalizedTypes = products.map((product) => {
  let clone = { ...product };
  clone.type = clone.type[0].toUpperCase() + clone.type.slice(1);
  return clone;
});
console.log("Capitalized product types", capitalizedTypes);

// Get an array containing only product types.
// Example: ["T-shirt", "Socks", "Jeans", "T-shirt"]
let productTypes = products.map((product) => product.type);
console.log("Product types", productTypes);

// Add a new property to the products describing the product
let productWithDescription = products.map((product) => {
  let clone = { ...product };
  clone.description = `${product.color} ${product.type} that costs ${product.price} €`;
  return clone;
});
console.log("Product with description", productWithDescription);

// Get an array with only yellow products
let yellowProducts = products.filter((product) => product.color === "yellow");
console.log("Yellow products", yellowProducts);

// Get an array with products that cost more than 15
let costsMoreThan15 = products.filter((product) => product.price > 15);
console.log("Products that cost more than 15", costsMoreThan15);

// Get an array with listing only the types plus color of products that cost more than 15
let productTypesMoreThan15 = products
  .filter((product) => product.price > 15)
  .map((product) => `${product.color} ${product.type}`);
console.log(
  "Product types and color that cost more than 15",
  productTypesMoreThan15
);

// Get the first jeans in the products
let firstJeans = products.find((product) => product.type === "jeans");
console.log("Jeans", firstJeans);

// Check if there is at least a blue product
let blueProduct = products.find((product) => product.color === "blue");
if (blueProduct) {
  console.log("there is at least a blue product");
} else {
  console.log("there are no blue products");
}

// Check if there is at least a pink product
let pinkProduct = products.find((product) => product.color === "pink");
if (pinkProduct) {
  console.log("there is at least a pink product");
} else {
  console.log("there are no pink products");
}

// Check if there are at least 2 blue products
let blueProducts = products.filter((product) => product.color === "blue");
if (blueProducts.length >= 2) {
  console.log("there are at least 2 blue products");
} else {
  console.log("there are less than 2 products");
}

// Calculate the total price of products
let totalPrice = products.reduce((total, product) => total + product.price, 0);
console.log("Total price", parseFloat(totalPrice.toFixed(2)));

// Get an array with only product types, but without repetitions
let productTypesNoRepetitions = products.reduce((acc, product) => {
  if (!acc.includes(product.type)) {
    acc.push(product.type);
  }
  return acc;
}, []);
console.log("Product types no repetitions", productTypesNoRepetitions);

// Get the most expensive product
let mostExpensiveProduct = products.reduce((acc, product) => {
  if (acc.price === undefined || product.price > acc.price) {
    return product;
  } else {
    return acc;
  }
}, {});
console.log("Most expensive product", mostExpensiveProduct);

// Get the most expensive product: Version 2
// you can use .hasOwnProperty("propertyName") on an object to check if it has a property called "propertyName"
let mostExpensiveProduct2 = products.reduce((acc, product) => {
  if (! acc.hasOwnProperty("price") || product.price > acc.price) {
    return product;
  } else {
    return acc;
  }
}, {});
console.log("Most expensive product version 2", mostExpensiveProduct2);

// the following examples could all be done with .hasOwnProperty() instead of === undefined

// Get the cheapest product
let cheapestProduct = products.reduce((acc, product) => {
  if (acc.price === undefined || product.price < acc.price) {
    return product;
  } else {
    return acc;
  }
}, {});
console.log("Cheapest product", cheapestProduct);

// Get the type and color of the cheapest product

let cheapestProduct2 = products.reduce((acc, product) => {
  if (acc.price === undefined || product.price < acc.price) {
    return product;
  } else {
    return acc;
  }
}, {});
let cheapestProductDescription = `${cheapestProduct2.color} ${cheapestProduct2.type}`;
console.log("Cheapest product description:", cheapestProductDescription);
