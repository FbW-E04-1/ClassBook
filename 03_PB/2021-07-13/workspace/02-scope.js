/*  
    Scope (context)

    - global scope
    - block or local scope, anything inside {}
*/
let isTired = true;
console.log("am I tired?", isTired);
// let action;

/* 
    Every variable declared inside of an if statement, is visible and accessible
    only inside that block
*/
let action = "act";
if (isTired === true) {
  let action = "get some sleep";
  console.log("am I tired?", isTired);
} else {
  console.log("am I tired?", isTired);
  let action = "continue working";
}

// console.log(action);

console.log("am I tired?", isTired);

let global = "I am global";

console.log("1", global);

if (false) {
  let global = "I am local, inside the first if"; // <- this "global" is local
  console.log("2", global);
} else {
  let global = "I am local, inside the else";
  console.log("3", global);

//   global = "changed value";
//   console.log(global);
}

/* 
    This variable will take the value of the global one
*/
console.log("4", global); // 

