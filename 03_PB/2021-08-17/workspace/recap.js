/* 
    We can use the while loop when we don't know in advance how many times 
    do we need to iterate
*/
// while

/* 
    The do...while is like the while loop, but it always does at least 1 iteration 
*/
// do...while

/* --------- */

// for
for (let i = 0; i < 10; i++) {
  // ...
}

let list = ["banana", "apple", "lemon"];
for (let i = 0; i < list.length; i++) {
  // ...
}

// print the even numbers up to 100
// even number: n % 2 === 0
function printEvenNumbers(number) {
  // write a loop that goes from 0 to 100
  for (let i = 0; i <= number; i++) {
    // we check if the current number (i) is even or not
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

printEvenNumbers(50);
printEvenNumbers(150);
printEvenNumbers(1027);

// iterable: a data type you can iterate over

let animals = [
   //01234567
    "cat", // row 0 
    "dog", // row 1
    "giraffe", 
    "koala", 
    "t-rex"];

for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

let animal = "dinosaur";
for (let i = 0; i < animal.length; i++) {
  console.log(animal[i]);
}

/* 
cat
c
a
t
dog
d
o
g
giraffe
g
i
r
a
f
f
e
*/

for (let i = 0; i < animals.length; i++) {
  console.log("animal", animals[i]);
  for (let j = 0; j < animals[i].length; j++) {
    console.log(animals[j]); // animals[0], animals[1]
  }
}
