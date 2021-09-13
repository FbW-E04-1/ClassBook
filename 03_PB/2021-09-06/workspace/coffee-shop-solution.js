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
    name: "Macchiato",
    type: "drink",
    price: 1.59,
  },
  {
    name: "Iced coffee",
    type: "drink",
    price: 4.99,
  },
  {
    name: "Candy",
    type: "food",
    price: 0.99,
  },
];

// x  addOrder: adds the name of the item to the end of the orders array if it exists on the menu. Otherwise, return "This item is currently unavailable!"
// x  listOrders: returns the list of orders taken, otherwise, an empty array.

// x  fulfillOrder: if the orders array is not empty, return "The {item} is ready!". If the orders array is empty, return "All orders have been fulfilled!"
// x  dueAmount: returns the total amount due for the orders taken.
// x  cheapestItem: returns the name of the cheapest item on the menu.
// x  drinksOnly: returns only the item names of type drink from the menu.
// x  foodOnly: returns only the item names of type food from the menu.
// x add a new item to the menu
// x modify an item of the menu

class CoffeeShop {
  constructor(name, menu, orders) {
    this.name = name;
    this.menu = [...menu];
    this.orders = orders;
  }
  addMenuItem(item) {
    this.menu.push(item);
  }
  updatePriceInMenu(itemName, newPrice) {
    // this.menu.map((menuItem) => {
    //   if (menuItem.name === itemName) {
    //     menuItem.price = newPrice;
    //   }
    //   return menuItem;
    // });
    let item = this.menu.find((menuItem) => menuItem.name === itemName);
    item.oldPrice = item.price;
    item.price = newPrice;
  }
  printMenu() {
    return this.menu;
  }
  addOrder(itemName) {
    /**
     * Check if inside the menu we have an item where the "name" property matches "itemName"
     * As a result, we get an object (if the condition is met) otherwise we get undefined
     */
    let itemNameExists = this.menu.find(
      (menuItem) => menuItem.name === itemName
    );
    // this if is true if itemNameExists is anything other than undefined
    if (itemNameExists) {
      this.orders.push(itemName);
      return `${itemName} has been added to the orders list`;
    } else {
      return `${itemName} is currently unavailable`;
    }
  }
  listOrders() {
    return this.orders;
  }
  fulfillOrder() {
    /**
     * To check if the orders array is empty, we check if its length is equal to 0
     * if it is, the array is empty, otherwise it's not empty
     */
    if (this.orders.length === 0) {
      // it's empty
      return "All orders have been fulfilled";
    } else {
      // it's not empty
      let itemName = this.orders.shift();
      return `The order ${itemName} is ready!`;
    }
  }
  dueAmount() {
    // orders: ['Cinnamon roll', 'Iced coffee']
    /**
     * - We have to go through the orders array
     * - get the price for the item with that name
     * - add the price to the total
     */
    let total = this.orders.reduce((total, orderItemName) => {
      let item = this.menu.find((menuItem) => menuItem.name === orderItemName); // {name: "...", price: 3.99, ...}
      return total + item.price;
    }, 0);
    return parseFloat(total.toFixed(2));
    // let total = 0;
    // for (let orderItemName of this.orders) {
    //   for (let menuItem of this.menu) {
    //     if (menuItem.name === orderItemName) {
    //       total += menuItem.price;
    //     }
    //   }
    // }
    // return total;
  }
  cheapestItem() {
    // solution with .reduce()
    let cheapestItem = this.menu.reduce((cheapestItem, currentItem) => {
      if (cheapestItem.price < currentItem.price) {
        return cheapestItem;
      } else {
        return currentItem;
      }
      //  return cheapestItem.price < currentItem.price ? cheapestItem : currentItem;
    });
    return cheapestItem;
    // ===================
    // solution with .sort()
    //   let sortedMenu = [...this.menu].sort((a, b) => a.price - b.price);
    //   return sortedMenu[0];
    // ===================
    // solution with regular loop
    // let cheapestPrice = null;
    // let cheapestItem = null;
    // for (let menuItem of this.menu) {
    //   if (cheapestPrice === null || cheapestPrice > menuItem.price) {
    //     cheapestPrice = menuItem.price;
    //     cheapestItem = menuItem;
    //   }
    // }
    // return cheapestItem;
  }
  drinksOnly() {
    //   let drinks =  this.menu.filter((menuItem) => menuItem.type === "drink")
    //   return drinks.map((drink) => drink.name);
    return this.menu
      .filter((menuItem) => menuItem.type === "drink")
      .map((menuItem) => menuItem.name);
  }
  foodOnly() {
    return this.menu
      .filter((menuItem) => menuItem.type === "food")
      .map((menuItem) => menuItem.name);
  }
  filterByType(type) {
    return this.menu
      .filter((menuItem) => menuItem.type === type)
      .map((menuItem) => menuItem.name);
  }
}

let tcs = new CoffeeShop("Coffee Place", menu, []);
console.log(tcs);
console.log(tcs.addOrder("hot cocoa"));
console.log(tcs.addOrder("iced tea"));
console.log(tcs.addOrder("Cinnamon roll"));
console.log(tcs.addOrder("Iced coffee"));
console.log(tcs.addOrder("Coffee"));
console.log(tcs.addOrder("Coffee"));
console.log(tcs.addOrder("Coffee"));
console.log(tcs.addOrder("Sandwich"));

console.log(tcs.listOrders());
// console.log(tcs.fulfillOrder());
console.log(tcs.listOrders());
console.log("the due amount is", tcs.dueAmount());
console.log(tcs.cheapestItem());
// console.log(tcs.fulfillOrder());
// console.log(tcs.fulfillOrder());
// console.log(tcs.listOrders());
// console.log(tcs.dueAmount());

// console.log(tcs.cheapestItem());
console.log(tcs.drinksOnly());
console.log(tcs.foodOnly());
console.log(tcs.filterByType("drink"));
console.log(tcs.filterByType("food"));

tcs.addMenuItem({ name: "Orange juice", type: "drink", price: 6.99 });
console.log(tcs.printMenu());
tcs.updatePriceInMenu("Candy", 9.99);
console.log(menu);
