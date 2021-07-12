/* Array methods */

let fruit = ["apple", "banana", "pineapple", "apple", "pear", "lemon"];

let pearIndex = fruit.indexOf("pear"); // 4

console.log(pearIndex);
console.log(fruit.indexOf("pear"));
console.log(fruit);

fruit[pearIndex] = "peach";
console.log(fruit);

// fruit.length; // 5
// fruit.length - 2; // 3

// fruit[fruit.length - 1]; // fruit[5 - 1] -> fruit[4]
// fruit[fruit.length - 2]; // fruit[5 - 2] -> fruit[3]



console.log(fruit.indexOf("apple")); // 0

/* find the first apple starting from index 1 */
console.log(fruit.indexOf("apple", 1)); //

console.log(fruit.indexOf("orange")); // -1

/* 
    If there are oranges, fruit.indexOf("orange") will give us a positive index (1, 2, 3..)
    If there are no oranges, fruit.indexOf("orange") will give us -1
*/
let areThereOranges = fruit.indexOf("orange") !== -1; 
let areThereApples = fruit.indexOf("apple") !== -1;
console.log("Are there oranges?", areThereOranges);
console.log("Are there apples?", areThereApples);

/* Add elements to array */

fruit.push("grapes");
console.log(fruit);

fruit.unshift("lime");
console.log(fruit);

//  fruit.push(fruit);
//  console.log(fruit[fruit.length - 1]);
//  fruit.pop();
//  console.log(fruit);

/* Removing items from array */

let animals = ["dog", "cat", "mouse"];

// remove the last element from the array
let lastAnimal = animals.pop();
console.log("the last animal in the array was", lastAnimal);
console.log(animals);

// remove the first element from the array
let firstAnimal = animals.shift();
console.log("the first animal in the array was", firstAnimal);
console.log(animals);

/* 
push / pop

unshift / shift

push: add an element at the end of the array
pop: remove an element from the end of the array

unshift: add an element at the beginning of the array
shift: remove an element from the beginning of the array
*/


/* Reversing the array */

let numbers = [1, 2, 3, 4, 5];
console.log(numbers.reverse());
console.log(numbers);

/* Concatenating arrays */

let pets = ["dog", "cat"];
let wildAnimals = ["lion", "tiger"];
let birds = ["eagle", "oak"];

let allAnimals = birds.concat(pets, wildAnimals);
console.log("allAnimals", allAnimals);
// console.log("pets", pets);
// console.log("wild animals", wildAnimals);