/* 
    Scope 

    - global scope
    - local scope
*/

let x = 5; // <- global scope
let y = 99;

if (true) {
  x = 10;
  let y = 8;
  console.log("y inside if", y); // 8
}

console.log(x);
console.log("y outside if", y);

for (let i = 0; i < 10; i++) {
  console.log(i);
}

for (let i = 0; i < 10; i++) {
  let y = 100;
  console.log(i);
}

// console.log(i); // <- ?

let i = 0;
while (i < 10) {
  let thisIsLocal = 100;
  i++;
  console.log("inside the while", i);
}
console.log("outside the while", i);
