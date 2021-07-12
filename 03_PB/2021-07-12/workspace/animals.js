/* 
- Create an array containing 5 animals of your choice
- Save the value of the 3rd element of the array in a separate variable, and print this variable to the console
- Change the 4th animal in the array with “T-rex” and print the whole array againh
*/

let animals = ["cat", "dog", "duck", "squirrel", "horse"];
let thirdAnimal = animals[2];

console.log(thirdAnimal);

animals[3] = "T-rex";
// animals[animals.length - 2] = "T-rex";

console.log(animals);