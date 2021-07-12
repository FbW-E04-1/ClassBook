/* Splice and slice */

/* slice */

let animals = ["cat", "dog", "mouse", "duck", "bird"];

// get a portion of the array from index 1 to the end
console.log(animals.slice(1)); 

// get a portion of the array from index 1 to index 3 (or 4, not included) 
console.log(animals.slice(1, 4)); 
console.log(animals);

/* 

Splice

splice(index, howMany) // how many elements to remove at a certain index

splice(1); // remove all the items from index 1
splice(1, 3); // remove 3 items from index 1
splice(1, 2); // remove 2 items from index 1

splice(3, 2); // remove 2 items from index 3

*/

//animals.splice(1);
//animals.splice(2, 1); // 2 is the index, 3 is how many items to remove
//console.log(animals);
// console.log("splice 1 to 3", animals.splice(1, 3));
// console.log("original array", animals);



//let animals = ["cat", "dog", "mouse", "duck", "bird"];

animals.splice(2, 0, "giraffe")
console.log(animals);

let string = "my string";

let numbers = [1, 2, 3, 4, 5];

let joinedNumbers = numbers.join("-");
let anotherString = joinedNumbers + "6789";
console.log(anotherString);




/* Slice */

let instruments = ["guitar", "keyboard", "trumpet", "saxophone", "drums"];

instruments[0]; // guitar
instruments[1]; // keyboard 
instruments[4]; // drums 

// 1 is the starting point (included)
// 4 is the ending point (excluded)
console.log(instruments.slice(1, 4)); 

console.log(instruments[2]); // string "trumpet"
console.log(instruments.slice(2, 3)); // array ["trumpet"] 

console.log(instruments.slice(3, 3)); // array [] 
instruments[3];

console.log(instruments.slice(2)); // a slice from index 2 until the end 

console.log(instruments.slice(-3)); // a slice starting from the end for 3 elements

/*

0   1   2   3   4
| a | b | c | d |

*/


/* Splice */

//let instruments = ["guitar", "keyboard", "trumpet", "saxophone", "drums"];

// let instrumentsSlice = instruments.splice(1, 2);
// console.log(instruments);
// console.log(instrumentsSlice);

instruments.splice(1, 2, 999);
console.log(instruments);

// instruments.splice(1, 2);
// console.log(instruments);

// instruments.splice(1, 2);
// console.log(instruments);

// instruments.splice(0, 1);
// console.log(instruments);


let letters = ["a", "b", "c", "d"];
console.log(letters.slice(0, 2));