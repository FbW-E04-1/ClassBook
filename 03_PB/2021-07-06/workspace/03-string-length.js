let message = "I'm sleepy today";

"12345"; // <- length is 5, first index is 0, last index is 4


console.log(message.length);

/* Careful to how you type length */
console.log(message.lenght);

console.log("carlo".length);


/* A number doesn't have the length property */
let number = 12345;
console.log(number.length); // undefined

/* How to access individual characters in a string */

/* 
A string could be thought of as a list of characters.

Each character has an index.

Index starts at 0

"carlo"
 01234
*/

let firstName = "carlo";
let initial = firstName[0];
let thirdLetter = firstName[2];

console.log(initial);
console.log(firstName[2]);
console.log(firstName[4]);

// console.log(firstName[-1]);


/* For the string "carlo", the index of last letter is 4 */

/* The length of the string is 5 */
/* The index of the last element is always equal to the length of the string - 1 */

let lastCharacterIndex = firstName.length - 1;

console.log("last character index", lastCharacterIndex);
console.log("last character", firstName[lastCharacterIndex]);

console.log("last character", firstName[firstName.length - 1]);



/*
firstName = "carlo";
firstName[firstName.length - 1] => firstName[5 - 1] => firstName[4] => o
*/

/* ------------------ */

/* 
    let string = "a";

    - the index of the first character in "string" is 0
    - the index of the last character in "string" is 0
    - the length of "string" is 1
*/
let string = null; // length is 1
let emptyString = ""; // length is 0
console.log("string length is", string.length);
console.log("emptyString length is", emptyString.length);

console.log("first character of string", string[0]);
console.log("first character of string", string[string.length - 1]); // string[1 - 1] => string[0]

console.log(emptyString[0]);

console.log(string[99]); // undefined


// let creditCardNumber = "1234-1234-1234-9876";

/* Do you want to use the credit card that ends with 9876? */
