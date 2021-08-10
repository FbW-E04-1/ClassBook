const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let month = "January";

/* 
Property:
.length

Methods:
.toUpperCase()
.toLowerCase()
.substring()
.slice()

.split()
*/

console.log(month.toLowerCase());

console.log("substring", month.substring(0, 3));
console.log("slice", month.slice(0, 3));
console.log(month);

/* How to go from a string to an array? */
let splittedMonth = month.split('');
console.log(splittedMonth);
let joinedMonth = splittedMonth.join('');
console.log(joinedMonth);



// check if a month starts with the letter "J"

let month1 = "January";

// console.log(month1.includes("J", 0));
// console.log(month1.indexOf("J"));
// let index = month1.indexOf("J");

// let startsWithJ = index === 0 ? true : false;
// console.log(startsWithJ);

console.log(month1[0] === "J" ? true : false);






// check if a month starts with the letter "J" or "j", ignoring the case


console.log(month1[0] === "J" || month1[0] === "j" ? true : false);

// get the first letter from the string and lowercase just this letter
console.log(month1[0].toLowerCase() === "j" ? true : false);

// lowercase the whole string and then get the first letter
console.log(month1.toLowerCase()[0] === "j" ? true : false);

let lowerCaseMonth = month1.toLowerCase();
lowerCaseMonth[0] === "j";

// write a function that checks if a string starts with a certain letter, ignoring the case

function startsWith(month, letter) {
    return month.toLowerCase()[0] === letter.toLowerCase();
}

console.log("starts with", startsWith("January", "j"));
console.log("starts with", startsWith("", "j"));

console.log("starts with", startsWith("January", "J")); // should be true

console.log("starts with", startsWith("March", "J"));
console.log("starts with", startsWith("december", "d"));
console.log("starts with", startsWith("december", "m"));





// check if a month starts with "Ju" or "ju"
// substring(), substr(), slice()

let month2 = "June";
let match = "Ju";

console.log(month2.toLowerCase().slice(0, 2) === match.toLowerCase());
console.log(month2.toLowerCase().slice(0, 2) === match.toLowerCase()); // this should be true






// check if a month ends with "ber"

let month3 = "December";
let month4 = "September";
let month5 = "October";
let match3 = "ber";


console.log(month3, month3.slice(-3).toLowerCase() === match3.toLowerCase());
console.log(month4, month4.slice(-3).toLowerCase() === match3.toLowerCase());
console.log(month5, month5.slice(-3).toLowerCase() === match3.toLowerCase());




// check if a month ends with "ry"

let month6 = "January";
let month7 = "February";
let month8 = "March";
let matchRy = "ry";


console.log(month6, month6.slice(-2).toLowerCase() === matchRy.toLowerCase());
console.log(month7, month7.slice(-2).toLowerCase() === matchRy.toLowerCase());
console.log(month8, month8.slice(-2).toLowerCase() === matchRy.toLowerCase());

function startsWithString(month, string) {

}

startsWithString("nuJAary", "ja"); // false 
startsWithString("January", "ja"); // true
startsWithString("January", "jan"); // true
startsWithString("March", "M"); // true
startsWithString("December", "Dece"); // true
startsWithString("September", "De"); // false 
startsWithString("June", "ju"); // true 
startsWithString("July", "ju"); // true 
startsWithString("July", "jun"); // false 
startsWithString("June", "jun"); // false 