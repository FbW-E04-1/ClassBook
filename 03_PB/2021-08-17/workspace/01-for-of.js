/*
    for...of
*/

let animals = ["cat", "dog", "giraffe"];

console.log("regular for");
for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

/* 
for (let value of array) {
    console.log(value);
}
*/
console.log("for...of");
for (let animal of animals) {
  console.log(animal);
  if (animal === "cat") {
      break;
  }
}
// animal = animals[0];
// animal = animals[1];
// animal = animals[2];

let string = "hello world";

for (let i = 0; i < string.length; i++) {
  console.log("regular loop", string[i]);
}

for (let letter of string) {
  console.log(letter);
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let number of numbers) {
    if (number % 2 === 0) {
        console.log(number);
    }
}

for (let animal of animals) {
  console.log(animal);
  if (animal === "cat") {
      break;
  }
}