/**
 * JSON - JavaScript Object Notation
 * 
 * Supported values:
 * 
 * - object
 * - array
 * - number
 * - string (always with double quotes)
 * - boolean
 * - null
 * 
 * Differences between JavaScript and JSON:
 * 
 * - no functions are allowed in JSON
 * - no trailing commas
 * - comments are not allowed
 * 
 * 
 * Example of JSON:
 * 
 * - package.json file
 * 
 * JSON class
 * 
 * It has 2 static methods:
 * 
 * - JSON.stringify(): 
 *      we transform an object or an array into a JSON string. 
 *      We can represent every data compatible with JSON, so things like functions or undefined will be lost
 * 
 * - JSON.parse(): 
 *      we transform a JSON string into an object or an array 
 * 
 */


let person = {
    name: "Jesse",
    age: 22,
    hobbies: ["drawing", "singing", "cycling"],
    isMarried: false,
    something: null,
    somethingElse: undefined
};

let json = JSON.stringify(person);
console.log(person);
console.log(json);
console.log(typeof json);


let backToObject = JSON.parse(json);
console.log(backToObject);
console.log(backToObject.name);


/**
 * We can use JSON.stringify() and JSON.parse() to make proper clones of any array or object.
 * 
 * The limitation is that functions and properties with a value not supported by JSON (undefined, NaN, etc.)
 * are lost
 * 
 */

let numbers = [1, 2, 3, 100, 99, 5, 7];
let numbersClone1 = [...numbers];
let numbersClone2 = JSON.parse(JSON.stringify(numbers));