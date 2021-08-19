// a function that checks if a city starts with "Los" or "New"
// case insensitive "los", "new", "LOS", "NEW"

// function nameOfCity(city) {
//   // what: it's converting city to lower case
//   // why: we want out function to be case insensitive, by converting the original string
//   // to lowercase, I can more easily check if it matches "new" or "los"
//   let lowerCaseCity = city.toLowerCase();
//   let firstPartOfCity = lowerCaseCity.slice(0, 3);
//   if (firstPartOfCity === "new" || firstPartOfCity === "los") {
//     console.log(city);
//   } else {
//     console.log("The city name does not begin with Los or New");
//   }
// }

/*
Create a function named "nameOfCity". If a passed string begins with "Los" or "New", 
then return the full string. 
If not, return "The city name does not begin with Los or New".
The function should be case insensitive.

Write a function that checks if a string starts with "Los" or "New"

- the function should be named nameOfCity
- the function has 1 parameter (a string)
- the function should return the full string if it starts with "Los" or "New"
- in any other case the function should return "The city name does not begin with Los or New"

1. make a comparison to check if the beginning of the string matches "Los" or "New"
  - get the first 3 characters of the string
  - save this 3 characters in a variable
  - compare this 3 characters to the strings "Los" and "New"

*/

function nameOfCity(city) {}

nameOfCity("NEW YORK"); //➞ 'New York'
nameOfCity("New York"); //➞ 'New York'
nameOfCity("newark"); //➞ 'newark'
nameOfCity("Los Angeles"); //➞
nameOfCity("los pollos"); //➞
nameOfCity("London"); //➞ 'The city name does not begin with Los or New'
nameOfCity("Ne"); //➞ 'The city name does not begin with Los or New'

function city_name(str) {
  if (
    str.length >= 3 &&
    (str.substring(0, 3) === "Los" || str.substring(0, 3) === "New")
  ) {
    return str;
  }

  return "The city name does not begin with Los or New";
}

console.log(city_name("New York"));
console.log("new york", city_name("new york"));
console.log(city_name("Los Angeles"));
console.log(city_name("London"));

console.log("-------------------");
console.log("Exercise 2");
console.log("-------------------");

/*
Create a function named "isDivisible". 
The function should take an integer as an argument.
 If the integer is divisible by 100, then return true. If not, return false.

- create a function named isDivisible
- function takes one parameter
- check if the parameter is divisible by 100
*/

function isDivisible(number) {
  if (number % 100 === 0) {
    return true;
  } else {
    return false;
  }
}

function isDivisible2(number) {
  return number % 100 === 0 ? true : false;
}

function isDivisible3(number) {
  return number % 100 === 0;
}

function isDivisible4(number) {
  return !number % 100; // => !0 === true
}

// % remainder operator
// number % 100 === 0

console.log(isDivisible(1)); // false
console.log(isDivisible(1000)); // true
console.log(isDivisible(100)); // true

console.log("");
console.log("-------------------");
console.log("Exercise 3");
console.log("-------------------");

/*
Create a function named "missingAngle" 
which takes two angles of a triangle as arguments, 
and classifies the missing angleas either acute, right or obtuse. 
Note: 
An acute angle is smaller than 90°, 
a right angle is exactly 90° 
and an obtuse angle is greater than 90° (but less than 180°).

- create a function named missingAngle
- function takes 2 parameters (2 angle values)
- function should return a string describing the missing third angle as acute, right or obtuse

The sum of the angles in a triangle is always 180

2 angles "a" and "b"
you can get the value of the missing angle "c" by doing 180 - (a + b)

let a = 45;
let b = 45;
let c = 180 - (45 + 45); // => 180 - 90 => 90


let a = 65;
let b = 45;
let c = 180 - (65 + 45); // => 180 - 110 => 70

let a = 95;
let b = 35;
let c = 180 - (95 + 35); // => 180 - 130 => 50

*/

function missingAngle(a, b) {
  let anglesSum = a + b;
  let missingAngleValue = 180 - anglesSum;
  let missingAngleClassification = "";

  if (missingAngleValue === 90) {
    missingAngleClassification = "right";
  } else if (missingAngleValue > 90) {
    missingAngleClassification = "obtuse";
  } else {
    missingAngleClassification = "acute";
  }
  console.log(missingAngleClassification);
  return missingAngleClassification;
}


missingAngle(11, 20); //➞ 'obtuse' // remaining angle is 149°)
missingAngle(27, 59); //➞ 'obtuse'
missingAngle(135, 11); //➞ 'acute'
missingAngle(45, 45); //➞ 'right angle'

missingAngle(145, 45); //➞ 'right angle'

console.log("");
console.log("-------------------");
console.log("Exercise 4");
console.log("-------------------");

/*
Use a ternary operator to complete this task. 
Create a function named "isRaining". 
If passed true, return "wet day - you need an umbrella". 
If passed false, return "dry day - leave your umbrella at home".

- create a function named isRaining
- function takes 1 parameter, a boolean
- if true, return something
- if false, return something else

condition ? "true case" : "false case"
*/

function isRaining(condition) {
  return condition
    ? "wet day - you need an umbrella"
    : "dry day - leave your umbrella at home";
}

console.log(isRaining(true)); // 'wet day - you need an umbrella'
console.log(isRaining(false));

console.log("");
console.log("-------------------");
console.log("Exercise 5");
console.log("-------------------");

/*
Create a function named "geometricalSequence" and use a 
loop to return the following sequence: 1 2 4 8 16 32 64 128 256.
Concatenate each value to a string and return a string.

- a function named "geometricalSequence"
- we need a loop
- we need to generate a sequence that goes from 1 until 256
  - the sequence goes in increments of 2
- the sequence should be concatenated into a single string with spaces separating each value

2^0 = Math.pow(2, 0) = 2 ** 0 = 1
2^1 = 2
2^2 = 4
2^3 = 8
...
*/

function geometricalSequence() {
  let string = "";
  // make a loop that does 9 iterations
  for (let i = 0; i < 9; i++) {
    // console.log(2 ** i);
    string = string + 2 ** i + " ";
    // console.log(Math.pow(2, i));
  }
  // the .trim() method removes empty spaces at the beginning and end of a string
  return string.trim();
}

console.log(geometricalSequence()); // '1 2 4 8 16 32 64 128 256'

function geometricalSequence2() {
  let result = [];
  // make a loop that does 9 iterations
  for (let i = 0; i < 9; i++) {
    // console.log(2 ** i);
    result.push(2 ** i);
  }
  // convert the result array to a string

  // .join()
  // .toString()

  console.log(result.join(" "));
  return result.join(" ");
}

geometricalSequence2();

// create a string of asterisks using a loop * * * * *
function createString() {
  let string = "";
  for (let i = 0; i < 5; i++) {
    string = string + "*" + " ";
    console.log(string);
  }
  console.log(string);
}

// createString();

console.log("");
console.log("-------------------");
console.log("Exercise 6");
console.log("-------------------");

/*
Create a function named "multiplesOfThree" and use a loop 
to return the first five multiples of three: 3 6 9 12 15.
 Concatenate each value to a string and return a string.
*/

function multiplesOfThree() {
  let result = "";
  for (let i = 1; i <= 5; i++) {
    result += i * 3 + " "; // result = result + (i * 3) + " "
  }

  console.log(result.trim());
  return result.trim();
}

multiplesOfThree(); // '3 6 9 12 15'

console.log("");
console.log("-------------------");
console.log("Exercise 7");
console.log("-------------------");

function powerOf(number) {
  return Math.pow(number, number);
}

function powerOfV2(number) {
  return number ** number;
}

function powerOfV3(number) {
  let result = 1;
  for (let i = 0; i < number; i++) {
    result *= number;
  }
  console.log(result);
}

powerOfV3(5);

/* 
  When we have to accumulate values into a variable:

  - if it's a numerical sum, we have to start at 0
  - if it's a numerical multiplication, we have to start at least from 1
  - if it's a string concatenation, we normally start with an empty string ""
*/

/*
Create a function named "vowelCount" that accepts a string as an argument.
 Check how many vowels (A, a, E, e, I, i, O, o, U, u) the string contains, if any.
  Return the vowel count of the string.

 - we need a function called vowelCount
 - the function accepts 1 parameter
 - needs to count the number of vowels (both lower and upper case) in the input string
 - returns the vowel count
*/

function vowelCount(string) {
  let count = 0;
  let vowels = "aeiou";
  let lowerCaseString = string.toLowerCase();

  for (let i = 0; i < lowerCaseString.length; i++) {
    if (vowels.includes(lowerCaseString[i])) {
      count++;
    }
    // if (
    //   string[i] === "a" ||
    //   string[i] === "e" ||
    //   string[i] === "i" ||
    //   string[i] === "o" ||
    //   string[i] === "u"
    // ) {
    // }
  }

  console.log(count);
  return count;
}

vowelCount("hEllO"); // ➞ 2
vowelCount("hello"); // ➞ 2
vowelCount("test"); //➞ 1
vowelCount("fbw"); //➞ 0
