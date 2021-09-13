// name : a string (basically, of the shop)
// menu : an array of items (of object type), with each item containing the name (name of the item), type (whether food or a drink) and price.
// orders : an empty array
// and seven methods:

// addOrder: adds the name of the item to the end of the orders array if it exists on the menu. Otherwise, return "This item is currently unavailable!"
// fulfillOrder: if the orders array is not empty, return "The {item} is ready!". If the orders array is empty, return "All orders have been fulfilled!"
// listOrders: returns the list of orders taken, otherwise, an empty array.
// dueAmount: returns the total amount due for the orders taken.
// cheapestItem: returns the name of the cheapest item on the menu.
// drinksOnly: returns only the item names of type drink from the menu.
// foodOnly: returns only the item names of type food from the menu.

// orders: ["Coffee", "Donut", "..."]
class CoffeeShop {
  constructor(name, menu, orders) {
    this.name = name;
    this.menu = menu;
    this.orders = orders;
  }
  addOrder(itemName) {
    // check if we have an item in the menu with a name "itemName"
    /**
     * .filter(): returns an array with items matching a condition or an empty array
     * .find(): returns an item that matched a condition or undefined
     */
    let isItemNameInMenu = this.menu.find(
      (menuItem) => menuItem.name === itemName
    );

    // if we do, we push "itemName" to "orders"
    if (isItemNameInMenu) {
      this.orders.push(itemName);
      return `Order ${itemName} added`;
    } else {
      return `The item ${itemName} is currently unavailable`;
    }
  }
  fulfillOrder() {
    if (this.orders.length > 0) {
      let order = this.orders.shift();
      return `Order ${order} is ready`;
    } else {
      return "All orders have been fulfilled";
    }
  }
  cheapestItem() {
    let cheapest = this.menu.reduce((first, next) => {
      return first.price < next.price ? first : next;
    });
    return `the cheapest price in our menu is ${cheapest.name} it costs only ${cheapest.price}`;
  }
  listOrders() {
    return this.orders;
  }
  dueAmount() {
    let total = this.orders.reduce((total, itemName) => {
      let item = this.menu.find((menuItem) => itemName === menuItem.name);
      return total + item.price;
    }, 0);
    return total;
    // let total = 0;
    // if (this.orders.length === 0) {
    //   return total;
    // } else {
    //   this.orders.forEach((order) => {
    //     this.menu.forEach((item) => {
    //       if (item.name === order) {
    //         total += item.price;
    //       }
    //     });
    //   });
    //   return total;
    // }
  }
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
console.log(tcs.addOrder("Iced coffee"));
console.log(tcs.listOrders());
// console.log(tcs.fulfillOrder());
// console.log(tcs.fulfillOrder());
// console.log(tcs.fulfillOrder());
console.log(tcs.listOrders());

//   console.log(tcs.dueAmount());
//   console.log(tcs.fulfillOrder());
//   console.log(tcs.fulfillOrder());
//   console.log(tcs.fulfillOrder());
//   console.log(tcs.listOrders());
console.log(tcs.dueAmount());

console.log("cheapest item", tcs.cheapestItem());
//   console.log(tcs.drinksOnly());
//   console.log(tcs.foodOnly());
