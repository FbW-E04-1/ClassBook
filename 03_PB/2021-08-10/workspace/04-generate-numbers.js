/* 

Write a function that takes a number in input and
returns a string with the numbers from 0 to that number, separated by space

example:

generateList(10);

output:

"0 1 2 3 4 5 6 7 8 9 10"

*/

function generateList(number) {
  let string = "";
  for (let i = 0; i <= number; i++) {
    console.log(i);
    string = string + " " + i;
    // if (i < number) {
    //   string = string + i + " ";
    // } else {
    //   string = string + i;
    // }
  }
  console.log(string);
  string = string.trim();
  console.log(string);
  return string;
}

let list = generateList(10);
console.log(list);
