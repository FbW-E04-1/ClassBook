/* 
    Array

*/

let weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let letters = ["a", "b", "c", "d"];  // ...
let first10Integers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let otherNumbers = [0.1, 0.2, 0.3, 0.4];

console.log(weekDays[1]);
console.log(weekDays[weekDays.length - 1]);

let message = "Hello, today is Tuesday";
let messageArray = message.split(" ");
console.log(messageArray);

let arrayToString = messageArray.join(" ");
console.log(arrayToString);

let lastNumber = otherNumbers.pop();
console.log(lastNumber);
console.log(otherNumbers);

otherNumbers.push(0.4);
console.log(otherNumbers);


otherNumbers.shift();
console.log(otherNumbers);

otherNumbers.unshift(0.1);
console.log(otherNumbers);

// get the elements from index 1 to 4 (not included)
console.log(weekDays.slice(1, 4)); // Tuesday, Wednesday, Thursday
console.log(weekDays);


// remove 3 elements starting at index 1
console.log(weekDays.splice(1, 3));
console.log(weekDays);