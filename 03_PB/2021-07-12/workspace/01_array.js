/* 
Array

Can contain:
- number
- string
- boolean
- array
- object 

*/

// let vegetables = []; // empty array
let name = "bla bla"; // <- empty string
                
                 //  0           1        2
let vegetables = ["lettuce", "tomato", "carrot"]; 

// vegetables.push("cucumber");

console.log("the length of the string name is:", name.length);
console.log("the first letter of the string name is:", name[0]);
console.log("the length of the array vegetable is:", vegetables.length);
console.log("the first vegetable is:", vegetables[0]);
console.log("the last vegetable is:", vegetables[vegetables.length - 1]);

let lastIndex = vegetables.length - 1; // 2
console.log("last index in the array is:", lastIndex);
console.log("the last vegetable is:", vegetables[lastIndex]);

let numbers = [1111111111, 2, 3, 4, 5, 6, 7, 8, 9]; // length 10
let words1 = ["cup bottle walking"]; // length 1
let words2 = ["cup", "bottle", "walking"]; // length 3
