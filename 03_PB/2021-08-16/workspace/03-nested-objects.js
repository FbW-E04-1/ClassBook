const person = {
  name: "Mike",
  age: 22,
  address: {
    street: "Some street",
    number: 21,
    city: "London",
  },
};

console.log(person.address.street);
console.log(person["address"]["street"]);
console.log(person.address["street"]);
console.log(person["address"].street);

const person2 = {
  name: "Mike",
  age: 22,
  address: {
    street: {
      streetName: "Some street",
      streetNumber: 21,
    },
    city: "London",
  },
};

console.log(person2.address.street.streetName);

/* 
    Exercise: 

    - print the name of the user
    - print the email 
    - print the age 
    - print the billing state
    - print the delivery city 

*/
const user = {
  id: 101,
  email: "email@email.com",
  personalInfo: {
    name: "Maxine",
    age: 37,
    address: {
      delivery: {
        line1: "Banana street",
        line2: "Fruit avenue",
        city: "Legoland",
        state: "MT",
      },
      billing: {
        line1: "Wiststr.",
        line2: "",
        city: "Berlin",
        state: "Germany",
      },
    },
  },
};

let person3 = {
  firstName: "Laura",
  lastName: "Smith",
  fullName: this.firstName,
  sayHello: function() {
   console.log(`${this.firstName} ${this.lastName}`);
  }
};

person3.sayHello();
console.log(person3.fullName);