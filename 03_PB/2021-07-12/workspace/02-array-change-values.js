/* Array value reassignment */

let fruit = ["apple", "pear", "mango"];

console.log(fruit[1]);

/* I want to replace "pear" with "banana" */

fruit[1] = "banana";

console.log(fruit);

fruit[2] = "kiwi";

console.log(fruit);


let name = "carlo";

name = "carlos";

let numbers = [1, 2, 3, 4, 5];

numbers[4] = 99;

console.log(numbers);

numbers[0] = "blabla";
console.log(numbers);

numbers[0] = true;
console.log(numbers);

numbers[1] = "";
console.log(numbers);

// fruit[3] = "avocado";
// console.log(fruit);

// fruit[10] = "orange";
// console.log(fruit);

fruit.push("avocado");
fruit.push("orange");
console.log(fruit);

fruit.push(200);
console.log(fruit);

fruit[0] = 21;
console.log(fruit);

let vegetables = ["tomato", "tomato", "tomato"];
console.log(vegetables);

vegetables[0] = "pear";
console.log(vegetables);