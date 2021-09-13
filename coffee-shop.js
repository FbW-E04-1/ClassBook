// Coffee shop
// https://classroom.github.com/a/-7Cckifd

// Shopping cart
// https://classroom.github.com/a/5MoAJ3kO



/**
 * 
 * - go through the whole menu 
 * - check if at least 1 item in the menu has the same name as the one you are trying to order
 * 
 * .filter()
 * - 
 * 
 * .find()
 * - it returns 1 item if the condition is met
 * - otherwise it returns undefined
 * 
 * if (this.menu.find(...)) {
 *  // the item is in the menu
 *  .push()
 * } else {
 *  // the item is not in the menu
 *  return "the item is unavailable"
 * }
 */






/**
 * Use filter: the result of filter is an array. 
 * 
 * - it could be an empty array, if no items matched the condition
 * - or it could be an array with some items inside
 * 
 * [1] // <- length is 1
 * [] // <- length is 0
 * 
 * let filteredProducts = menu.filter()...
 * 
 * if (filteredProducts.length === 0) {} // it's empty
 * else {} // not empty
 * 
 * -----
 * 
 *  .find() 
 * - you get an item as a result if at least one item satisfies the condition
 * - otherwise, you get undefined
 * 
 * if (menu.find(...)) {
 *    // there was a match
 * } else {
 *  // the item is not available
 * }
 */
                // true   //false  //false  //true  //true
let products = ["coffee", "water", "donut", "cake", "chocolate bar"];

function startsWithC(product) {
  return product[0] === "c";
}

let productsThatStartWithC = products.filter(startsWithC);
console.log(productsThatStartWithC);



// let item = products.find((product) => product === "donut");
// console.log(item);










class CoffeeShop {
  constructor(name, menu, orders) {
    this.name = name;
    this.menu = menu;
    this.orders = orders;
  }
  shopName = () => this.name;
  addOrder = (itemName) => {
    if (this.menu.filter((item) => item.name === itemName).length) {
      this.orders.push(itemName);
      return "Order added!";
    }
    return "This name is currently unavailable!";
  };
  fulfillOrder = () =>
    this.orders.length
      ? `The ${this.orders.shift()} is ready!`
      : "All orders have been fulfilled!";
  listOrders = () => this.orders;
  dueAmount = () =>
    +this.orders
      .reduce(
        (acc, itemName) =>
          acc + this.menu.filter((item) => item.name === itemName)[0].price,
        0.0
      )
      .toFixed(2);
  cheapestItem = () =>
    this.menu.reduce(
      ([n, p], x) => (x.price < p ? [x.name, x.price] : [n, p]),
      ["", 100.0]
    )[0];
  drinksOnly = () =>
    this.menu.filter((item) => item.type === "drink").map((item) => item.name);
  foodOnly = () =>
    this.menu.filter((item) => item.type === "food").map((item) => item.name);
}

let menu = [
  {
    name: "Coffee",
    type: "drink",
    price: 1.59,
  },
  {
    name: "Sandwich",
    type: "food",
    price: 4.99,
  },
  {
    name: "Donut",
    type: "food",
    price: 2.59,
  },
  {
    name: "Coke",
    type: "drink",
    price: 1.99,
  },
  {
    name: "Lemonade",
    type: "drink",
    price: 1.99,
  },
  {
    name: "Toast",
    type: "food",
    price: 3.99,
  },
  {
    name: "Cinnamon roll",
    type: "food",
    price: 3.99,
  },
  {
    name: "Iced coffee",
    type: "drink",
    price: 3.99,
  },
];
let tcs = new CoffeeShop("Coffee Place", menu, []);
console.log(tcs.addOrder("hot cocoa")); 
console.log(tcs.addOrder("iced tea")); 

console.log(tcs.addOrder("Cinnamon roll")); 
console.log(tcs.addOrder("Iced coffee")); 
console.log(tcs.listOrders()); 

console.log(tcs.dueAmount()); 
console.log(tcs.fulfillOrder()); 
console.log(tcs.fulfillOrder()); 
console.log(tcs.fulfillOrder()); 
console.log(tcs.listOrders()); 
console.log(tcs.dueAmount()); 

console.log(tcs.cheapestItem()); 
console.log(tcs.drinksOnly()); 
console.log(tcs.foodOnly()); 




class CoffeeMachine {
    constructor(power) {
        this._power = power;
    }
}

let myCoffee = new CoffeeMachine(8);

console.log(myCoffee._power);