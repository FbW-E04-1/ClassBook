"";
'';

/* 
    I'm sleepy today
*/

let message = "I'm sleepy today";
console.log(message);

// let message2 = 'I'm sleepy today';
// console.log(message2);

/* 
    I'm on the phone with my friend. He just said: "Hello!"
*/

let string1 = "I'm on the phone with my friend. He just said: ";
let string2 = '"Hello!"';
let finalString = string1 + string2;

// console.log(finalString);

/* Escaping characters */

let phoneMessage = "I'm on the phone with my friend. He just said: \"Hello!\"";
console.log(phoneMessage);
let phoneMessage2 = 'I\'m on the phone with my friend. He just said: "Hello!"';
console.log(phoneMessage2);

let escapingMessage = "To escape apostrophe or double quotes characters, I need to use the \\ character";
console.log(escapingMessage);

let divisionMessage = "To divide 2 numbers I use /";
console.log(divisionMessage);

let slashString = "\\\\\\\\\\\\\\";
console.log(slashString);

/* Escape sequences: special characters */
/* 

\n => new line
\t => tab

*/
let multipleLines = "This is a string. \nThis is on a new line.";
console.log(multipleLines);

let spacedString = "This\tstring\tcontains\ttabs"
console.log(spacedString);
