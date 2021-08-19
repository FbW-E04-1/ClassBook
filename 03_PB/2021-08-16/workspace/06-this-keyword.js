let person = {
  firstName: "Carlo",
  lastName: "Trimarchi",
  profession: "teacher",
  sayHi: function () {
    console.log("Hi");
  },
  introduce: function () {
    console.log(
      `Hello, my name is ${this.firstName} ${this.lastName} and I work as a ${this.profession}`
    );
  },
  address: {
    street: "my street",
    city: "berlin",
  },
  printAddress: function () {
    console.log(`My name is ${this.firstName} and I live in ${this.address.city}`);
  },
};

console.log(person.firstName);
person.sayHi();
person.introduce();

person.printAddress();
