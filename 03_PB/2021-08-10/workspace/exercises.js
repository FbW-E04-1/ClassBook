/* 
    Complete the function below:

    - the function takes in 2 parameters: a string of a month and a match string
    - it returns true if the month starts with the "match" string

    Solve it using the .substring() or the .slice() method
*/

function startsWithString(month, match) {
  month = month.toLowerCase();
  match = match.toLowerCase();

  let result = month.slice(0, match.length) === match;
  console.log(month, match, result);
  return result;
}

startsWithString("January", "ja"); // month.slice(0, 2) === match
startsWithString("January", "Ja"); // month.slice(0, 2) === match
startsWithString("March", "Ma");
startsWithString("March", "Mar"); // month.slice(0, 3) === match
startsWithString("December", "Decemb"); // month.slice(0, 6) === match
startsWithString("October", "Oct");
startsWithString("September", "Sept");
startsWithString("September", "Dec");

startsWithString("January", "ja"); // true
startsWithString("January", "jan"); // true
startsWithString("March", "M"); // true
startsWithString("December", "Dece"); // true
startsWithString("September", "De"); // false
startsWithString("June", "ju"); // true
startsWithString("July", "ju"); // true
startsWithString("July", "jun"); // false
startsWithString("June", "jun"); // true

// let myMonth = "October";
// let myMatch = "Oct";
// startsWithString(myMonth, myMatch);

/* 
    Same exercise as above, except you need to checck if a month ends with a certain string
*/

function endsWithString(month, match) {
  month = month.toLowerCase();
  match = match.toLowerCase();

  let result = month.slice(-match.length) === match;
  console.log(month, match, result);
  return result;
}

endsWithString("january", "ry"); // month.slice(-2) === match
endsWithString("march", "ch"); // month.slice(-2) === match
endsWithString("march", "ry"); // month.slice(-2) === match
endsWithString("December", "mber"); // month.slice(-4) === match
endsWithString("October", "tober"); // month.slice(-5) === match

/* 

Write a function that takes a list of numbers in input and for each number it prints if the number is even or odd.

Try to solve it using the ternary operator

ex: 
numbers = [2, 3, 6];
evenOrOdd(numbers);

output:

"2 is even"
"3 is odd"
"6 is even"
*/

let numbers = [2, 5, 7, 90, 30.3, 99, 103.3];

function evenOrOdd(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    console.log(
      numbers[i] % 2 === 0 ? `${numbers[i]} is even` : `${numbers[i]} is odd`
    );
  }
}

evenOrOdd(numbers);
