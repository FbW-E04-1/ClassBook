class Cart {
  constructor() {
    this.items = [];
    this.total = 0;
  }

  add(product) {
    let productInCart = this.items.find((item) => item.name === product.name);
    if (productInCart) {
      productInCart.quantity++;
    } else {
      let clone = { ...product };
      clone.quantity = 1;
      this.items.push(clone);
    }
  }
  remove(name) {
    let changeQuantity = this.items.map((item) => {
      if (item.name === name) {
        item.quantity--;
      }
      return item;
    });
    this.items = changeQuantity.filter((item) => item.quantity > 0);
  }
  getTotal() {
    return this.items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
  }
  list() {
    return this.items;
  }
  shippingCost() {
    let total = this.getTotal();
    if (total > 100) {
      return 0;
    }
    let itemsCount = this.items.reduce(
      (count, item) => (count += item.quantity),
      0
    );
    return itemsCount < 5 ? 4.9 : 9.9;
  }
}

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

let myCart = new Cart();
let shoes = new Product("shoes", 15.99);
let shirt = new Product("shirt", 25.99);
let jeans = new Product("jeans", 29.99);

myCart.add(shoes);
myCart.add(shirt);
myCart.add(shirt);
myCart.add(jeans);

console.log(myCart.list());
console.log(myCart.getTotal());
myCart.remove("shirt");
myCart.remove("shirt");
console.log(myCart.list());
