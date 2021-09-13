let products = ["coffee", "water", "donut", "cake", "chocolate bar"];

function startsWithC(product) {
  return product[0] === "c";
}

let productsThatStartWithC = products.filter(startsWithC);
console.log(productsThatStartWithC);

let menu = [
  {
    name: "coffee",
    price: 2.99,
  },
  {
    name: "cake",
    price: 5.99,
  },
  {
    name: "donut",
    price: 4.99,
  },
];

let orders = [];

function addOrder(itemName) {
  // first check if the product with name "itemName" is in the menu
  let isItemInMenu = menu.find((menuItem) => menuItem.name === itemName);
  console.log("isItemInMenu", isItemInMenu);

  // if it is, push it to the orders array
  if (isItemInMenu) {
    orders.push(itemName);
  } else {
    console.log("the item is unavailable");
  }
}

addOrder("coffee");
addOrder("beer");

console.log(orders);