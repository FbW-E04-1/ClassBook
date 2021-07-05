let a = 10;

/* 
We assign the value inside of the variable "a" to the variable "b"

After this line, b will be equal to 10.
*/
let b = a; // b => 10

/* Now we change the value of "a" to 0 */
a = 0;

// What's the value of b now? 10






let a = 5;
let b = a; // we are copying the value of "a" to "b"
console.log("a is equal to:", a);
console.log("b is equal to:", b);

console.log("-----------");

a = 10;
console.log("a is equal to:", a);
console.log("b is equal to:", b);

let sum = a + b;
console.log("sum", sum);


/*
2, 4 => average 3

1. sum all the values together
2. divide the sum by the number of values
2 + 4 = 6;
6 / 2 = 3;


1, 2, 3, 4, 5, 6

1 + 2 + 3 + 4 + 5 + 6
*/