/* 
    Every function by default "returns" undefined
*/

function sum(a, b) {
  let result = a + b;
  console.log("inside function", result);
  return result;
}

console.log(sum(1, 3));
sum(100, 458);

if (sum(1, 3) > 2) {
  console.log("sum is bigger than 2");
}

let result = sum(293587, 324958);
console.log("result", result);

let result1 = sum(5, 10);
console.log("result1", result1);

console.log(sum(sum(1, 3), sum(9, 20))); // -> 33


function greeting(name) {
    return `Hello ${name}`;
    console.log("bla");
    return `Hi ${name}`;
}

console.log(greeting("carlo"));


function max(a, b) {
    if (a > b) {
        return "a is max: " + a;
    } else {
        return "b is max: " + b;
    }
    console.log("blablabla");
}

console.log(max(1, 2));
console.log(max(3, 10));
console.log(max(60, 10));




function giveMe5() {
    return 5;
}

let number = giveMe5();
console.log(giveMe5());

// console.log(number);

function average(totalAmount, n) {
    return totalAmount / n;
}
console.log("------------");
let total = sum(100, 150);
console.log(total);

let myAverage = average(total, 2);
console.log(myAverage);

