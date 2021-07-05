let total = 0;

let applePrice = 5;

/* first apple */
// total = total + applePrice;

total += applePrice;

console.log(total);


/* second apple */
// total = total + applePrice;
total += applePrice;
console.log(total);

/* third apple */
// total = total + applePrice;
total += applePrice;
console.log("blablablba", total);



/* ----------------------------- */

/* Increment the value of a by 2 */
let a = 5;

a = a + 2; // same as => a = 5 + 2



/* 
let b = 2;
b += 10 // => b = b + 10; => b = 2 + 10;

1. we add the current value of b (2) to 10 (b + 10) => (2 + 10)
2. we replace b with this value we just calculated

In the end, b will be equal to 12
*/
a += 10;

a += 2; // same as => a = a + 2;
a -= 1; // => a = a - 1;
a *= 3; // => a = a * 3;
a /= 3; // => a = a / 3;

/* String accumulation */

let string = "*";

string += "*";
console.log(string);
string += "*";
console.log(string);
string += "*";
console.log(string);
string += "*";
console.log(string);
string += "*";
console.log(string);
