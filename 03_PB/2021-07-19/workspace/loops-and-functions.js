function areAllNumbersEven(numbers) {
  let answer = true;
  for (let i = 0; i < numbers.length; i++) {
    // we check if a number is odd
    if (numbers[i] % 2 !== 0) {
      answer = false;
      break;
    }
  }
  return answer;
}

let input1 = [2, 4, 6, 7, 8, 10, 12];
let input2 = [0, 88, 64, 2, 5, 100];

console.log(areAllNumbersEven(input1)); // -> numbers (the parameter) will be equal to input1 (the argument)
console.log(areAllNumbersEven(input2)); // -> numbers (the parameter) will be equal to input2 (the argument)
console.log(areAllNumbersEven([2, 4, 6])); // -> numbers (the parameter) will be equal to [2, 4, 6] (the argument)
console.log(areAllNumbersEven([2, 4, 6, 7]));

console.log(areAllNumbersEven(2, 4, 6, 7));

let array = [2, 4, 6]; // an array is a single value that contains multiple values
// let array2 = 2, 4, 6;

// console.log("Is every number in the array even?", answer);

// let answer2 = true;
// for (let i = 0; i < numbers2.length; i++) {
//   if (numbers2[i] % 2 !== 0) {
//     answer2 = false;
//     break;
//   }
// }

// console.log("Is every number in the array even?", answer2);

for (let i = 0; i < 10; i++) {
  console.log(i);
}

// a loop that goes from 10 to 50, increase 1 by 1

for (let i = 10; i < 50; i++) {
  console.log(i);
}

for (let i = 100; i < 150; i++) {
  console.log(i);
}

for (let i = 1000; i < 1350; i++) {
  console.log(i);
}

function dragonfly(start, end) {
  for (let i = start; i < end; i++) {
    console.log(i);
  }
}

dragonfly(20, 30);
dragonfly(200, 300);
dragonfly(1, 5);

function jerreh(start, end) {
  for (let i = start; i < end; i++) {
    console.log(i);
  }
}
jerreh(50, 100);


/* 
    A function tha takes 2 parameters:
    - a string
    - a number

    The function should return a string with the input string repeated n times

    for example: 

    inputString = "bla"
    n = 3

    result = "blablabla"
*/
function createString(inputString, n) {
    let result = "";
    for (let i = 0; i < n; i++) {
        result += inputString;
    }
    return result;
}

console.log(createString("bla", 3)); // "blablabla"
console.log(createString("nom", 5)); // "nomnomnomnomnom"
console.log(createString("a", 9)); // "aaaaaaaaa"