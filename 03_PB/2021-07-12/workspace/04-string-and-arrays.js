/* Strings and arrays */

/* 

- split() is a method of strings
    - it converts strings to arrays

- join() is a method of arrays
    - it converts arrays to strings 

*/

let message = "Hello, world!";

let splitMessage = message.split(",");
console.log("splitMessage", splitMessage);
console.log("message", message);

// let text =
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id odio similique laboriosam illo eius! Odio eligendi saepe magnam odit dignissimos ipsum, laborum eius numquam laboriosam, vel quam nemo culpa temporibus.";

//   console.log(text.split(" "));

let joinedMessage = splitMessage.join("BLABLABLA");
console.log(joinedMessage);


let fruit = ["orange", "apple", "banana"];

console.log(fruit.join()); // orange,apple,banana
console.log(fruit.join("")); // orangeapplebanana
console.log(fruit.join(" - ")); // orange - apple - banana
console.log(fruit.join(", ")); // orange, apple, banana 