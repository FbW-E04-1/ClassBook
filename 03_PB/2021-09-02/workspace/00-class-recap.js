/**
 * Object
 *
 * It's a collection of key/value pairs
 *
 * - gather data from a database, order them
 * - to store properties and methods
 *
 */

let userArray = ["john", "email@example.com", 39, 42];

// let user = {
//   firstName: "john",
//   email: "email@example.com",
//   age: 39,
//   shoeSzie: 42,
// };

let book = {};
let movie = {};
let song = {};
let animal = {};
let magazineArticle = {};
let blogPost = {};
let cat = {
  name: "jim",
  color: "red",
  age: 3,
};

/**
 * A class is abstract:
 *
 * It defines the final structure for an object
 *
 * - the prototype for something real
 * - the blueprint
 * - the idea of an object
 *
 */

let userObj1 = {
  firstName: "john",
  email: "email@example.com",
  age: 39,
  shoeSize: 42,
};
let userObj2 = {
  firstName: "jane",
  email: "email@example.com",
  age: 39,
  shoeSize: 42,
};
let userObj3 = {
  firstName: "michael",
  email: "email@example.com",
  age: 39,
  shoeSize: 42,
};
userObj1.introduce = function () {
  console.log(`Hello, my name is ${this.firstName}`);
};
userObj2.introduce = function () {
  console.log(`Hello, my name is ${this.firstName}`);
};
userObj3.introduce = function () {
  console.log(`Hello, my name is ${this.firstName}`);
};

console.log("====== regular objects");

userObj1.introduce();

class User {
  constructor(firstName, email, age, shoeSize) {
    //   lastName: ".....",
    this.firstName = firstName;
    this.email = email;
    this.age = age;
    this.shoeSize = shoeSize;
  }
  introduce() {
    console.log(`Hello, my name is ${this.firstName}`);
  }
}

// how to create an object from a class?
let user1 = new User("john", "email@example.com", 39, 42);
let user2 = new User("jane", "email@example.com", 32, 43);
let user3 = new User("michael", "email@example.com", 30, 37);

console.log(user1.firstName);
console.log(user1.email);
console.log(user1.age);
console.log(user1.shoeSize);

// add a introduce() method that outputs: Hello, my name is ...

// user1.introduce = function() {console.log(`Hi, my name is ${this.firstName}`)};
// user2.introduce = function() {console.log(`Hi, my name is ${this.firstName}`)};
// user3.introduce = function() {console.log(`Hi, my name is ${this.firstName}`)};
console.log(user1);
console.log(user2);
console.log(user3);

user1.introduce();
user2.introduce(); // <- does this work?
user3.introduce(); // <- does this work?

/**
 * Student class
 *
 * - name
 * - email
 * - city
 *
 */

console.log();
console.log();
console.log("============== Class example ===============");
console.log();
console.log();
console.log();


class Student {
  constructor(name, email, city) {
    this.name = name;
    this.email = email;
    this.city = city;
  }
  introduce() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

let student1 = new Student("Jenny", "jenny@example.com", "Berlin");
let student2 = new Student("Mary", "mary@example.com", "Hamburg");
let student3 = new Student("Mark", "mark@example.com", "Munich");

student1.introduce();

/**
 * advanced example with Class classroom
 *
 * - name
 * - students []
 */

class Classroom {
  constructor(name) {
    this.name = name;
    this.students = [];
  }
  registerStudent(student) {
    this.students.push(student);
  }
  listStudents() {
    return this.students;
  }
  size() {
    return this.students.length;
  }
  studentNames() {
    // return an array with only student names
    // this.name
    // output: ["Jenny", "Mary", "Mark"]
    // accumulator = []
    // accumulator.push(currentStudent.name)
    // let names = this.students.reduce((accumulator, currentStudent) => {
    //   accumulator.push(currentStudent.name);
    //   return accumulator;
    // }, []);
    // return names;
    let names = this.students.map((student) => student.name);
    return names;
  }
}

let javascriptClassroom = new Classroom("JavaScript");

javascriptClassroom.registerStudent(student1);
javascriptClassroom.registerStudent(student2);
javascriptClassroom.registerStudent(student3);

console.log(javascriptClassroom.listStudents());
console.log(javascriptClassroom.size());
console.log(javascriptClassroom.size());
console.log(javascriptClassroom.studentNames());

/**
 * School class
 *
 * - name
 * - classes []
 */
