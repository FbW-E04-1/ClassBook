class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Cart {
  constructor() {
    this.items = [];
  }
  add(product) {
    let productInCart = this.items.find((item) => item.name === product.name);
    if (productInCart) {
      productInCart.quantity++;
    } else {
      let productClone = { ...product };
      productClone.quantity = 1;
      this.items.push(productClone);
    }
    // product.quantity = 1;
    // this.items.push(product);
  }
  applyVoucher(discount) {
    this.items = this.items.map((item) => {
      item.price = item.price * discount;
      return item;
    });
  }
}

let myCart = new Cart();
let shoes = new Product("shoes", 15.99);
let shirt = new Product("shirt", 25.99);
let jeans = new Product("jeans", 29.99);

console.log(shoes);
console.log(myCart);
myCart.add(shoes);
myCart.add(shoes);
myCart.add(shoes);
console.log(shoes);
console.log(myCart);

myCart.applyVoucher(0.5);

console.log(shoes);
console.log(myCart);
