/**
 * countdown
 */

// a for loop that goes from 10 to 1, prints every number in the console and at the end prints "done."

// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }
// console.log("done.");

function countdown(n) {
  for (let i = n; i > 0; i--) {
    console.log(i);
  }
  console.log("done.");
  return;
}

countdown(10);
countdown(3);
countdown(100);

// console.log(3);
// console.log(2);
// console.log(1);

/**
 * Recursion: when a function calls itself from the inside
 *
 * 1. exit condition (base case, when to stop recursing)
 * 2. recurse (call to itself)
 *
 */

// function recursiveFunction() {
//     console.log("I'm recursive!");
//     recursiveFunction();
// }

// recursiveFunction();
// recursiveFunction();
// // recursiveFunction();
// // // recursiveFunction();
// // // // recursiveFunction();

function countdownRecursive(n) {
  if (n <= 0) {
    console.log("done.");
    return;
  } else {
    console.log("recursion", n);
    let changedN = n - 1;
    countdownRecursive(changedN);
  }
  console.log("this was countdown recursive", n);
}

countdownRecursive(3);


// - countdownRecursive(3);
//     - 3 <= 0 ? false 
//     - console.log(3);
//     - n--; (n: 2)
//     - countdownRecursive(2);
//         - 2 <= 0 ? false
//         - console.log(2)
//         - n--; (n: 1)
//         - countdownRecursive(1)
//             - 1 <= 0 ? false
//             - console.log(1)
//             - n-- (n: 0)
//             - countdownRecursive(0)
//                 - 0 <= 0 ? true
//                 - console.log("done.")
//                 - return
//         - console.log("this was countdown recursive", 1);
//     - console.log("this was countdown recursive", 2);
// - console.log("this was countdown recursive", 3);




// - reality
//     - dream(1)
//         - dream(2)
//     - dream(1)
// - reality



countdownRecursive(1);

- countdownRecursive(1)
    - console.log(1)
    - 1 - 1
    - countdownRecursive(0)
        - 0 <= 0 ? true
        - return
- console.log("this was countdown recursive", 1)





/**
 * "main function"
 * "function 1"
 * "function 2"
 * "function 3"
 * "ending function 2"
 * "ending function 1"
 * "ending main function"
 * "this is the end."
 */