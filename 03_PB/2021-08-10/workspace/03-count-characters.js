// count spaces in a string

let string = "carlo";
string[0]; // c
string[1]; // a
string[2]; // r
string[3]; // l
string[4]; // o
string[string.length - 1]; // o

string.length; // 5

function countSpaces(string) {
  let counter = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === " ") {
      counter++;
    }
  }

  return counter;
}

console.log(countSpaces("This is a string")); // 3
console.log(countSpaces("a a a a a")); // 4
console.log(countSpaces("aaaaa")); // 0

function countSpaces2(string) {
  let splitString = string.split(" ");

  return splitString.length - 1;
}

console.log(countSpaces2("This is a string")); // 3
console.log(countSpaces2("a a a a a")); // 4
console.log(countSpaces2("aaaaa")); // 0
console.log(countSpaces2(" ")); // 1
console.log(countSpaces2("  ")); // 2
console.log(countSpaces2(" a ")); // 2

// "a a a" => ["a", "a", "a"]

// count spaces and dots

function countSpacesAndDots(string) {
  let counter = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === " " || string[i] === ".") {
      counter++;
    }
  }
  console.log(counter);
  return counter;
}

countSpacesAndDots("This is a string."); // 4
countSpacesAndDots("This is a string..."); // 6
countSpacesAndDots("..."); // 3
countSpacesAndDots(" . "); // 3
countSpacesAndDots("."); // 1

/* Count punctuation */
console.log();
console.log("count punctuation");
console.log();

// .,;:_-!?

/*

let string = "Hey!";
let symbols = ".,;:_-!?;"
let counter = 0;

----
H
is the letter H equal to any of those characters? .,;:_-!?

let letter = "H";
for (let j = 0; j < symbols.length; j++) {
    if (letter === symbols[j]) {
        counter++;
    }
}
----
e
is the letter e equal to any of those characters? .,;:_-!?

let letter = "e";
for (let j = 0; j < symbols.length; j++) {
    if (letter === symbols[j]) {
        counter++;
    }
}
----
y
is the letter y equal to any of those characters? .,;:_-!?

let letter = "y";
for (let j = 0; j < symbols.length; j++) {
    if (letter === symbols[j]) {
        counter++;
    }
}

symbols.includes(letter);
if (symbols.includes(letter)) {
    counter++;
}
-----
!
is the letter ! equal to any of those characters? .,;:_-!?

let letter = "!";
for (let j = 0; j < symbols.length; j++) {
    if (letter === symbols[j]) {
        counter++;
    }
}


*/

function countPunctuation(string) {
  //   let symbols = [".", ",", ";", ":", "_", "-", "!", "?"];
  let symbols = ".,;:_-!?";
  let counter = 0;

  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < symbols.length; j++) {
      //   console.log("string[i]", string[i]);
      //   console.log("symbols[j]", symbols[j]);
      if (string[i] === symbols[j]) {
        counter++;
      }
    }
  }
  console.log(counter);
  return counter;
}

countPunctuation(".?-"); // 3
countPunctuation("string."); // 1
countPunctuation("Is this a string?"); // 1
countPunctuation("Hey, is this a string?"); // 2

console.log("second solution to countPunctuation");

function countPunctuation2(string) {
  let symbols = ".,;:_-!?";

  let counter = 0;
  for (let i = 0; i < string.length; i++) {
    if (symbols.includes(string[i])) {
        counter++;
    }
  }

  console.log(counter);
  return counter;
}
countPunctuation2(".?-"); // 3
countPunctuation2("string."); // 1
countPunctuation2("Is this a string?"); // 1
countPunctuation2("Hey, is this a string?"); // 2

console.log("single character match");

let inputString = "Hey!";
let symbols = ".,;:_-!?;";
let counter = 0;
// let letter = "a";

for (let i = 0; i < inputString.length; i++) { // this loop iterates through the string in input, through "Hey!"
  for (let j = 0; j < symbols.length; j++) { // this loop iterates through the list of symbols
    let letter = inputString[i]; // H, e, y, !
    if (letter === symbols[j]) {
      counter++;
    }
  }
}

console.log(counter);




let inputLetter = "?";
let symbols2 = ".,;:_-!?;";

console.log(symbols.includes(inputLetter));