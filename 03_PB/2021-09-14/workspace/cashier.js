// €3.75 and the paid amount is €50, then the client should receive €46.25 back in change.
/**
 * price: 3.75
 * paid amount: 50
 * change: 46.25
 *
 * change: 20 + 20 + 5 + 1 + 0.2 + 0.05
 * change: 2 * (20) + 5 + 1 + 0.2 + 0.05
 *
 * cashRegister = [100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01]
 * cashRegister = [["one hundred", 100], ["fifty", 50], ...]
 * cashRegister = [
 *      {
 *          amount: 0,
 *          name: "one hundred",
 *          value: 100
 *      },
 *      ...
 *      ];
 */

/**
 * change: 1
 *
 * 1 - 0.01
 * 0.99 - 0.01
 * 0.98 - 0.01
 * ...
 */

/**
 * price: 3.75
 *
 * paid amount: 50
 * change: 46.25
 * givenChange = {}
 *
 * is 100 <= 46.25? false, so we move on to the next note or coin
 *
 * is 50 <= 46.25? false, so we move on to the next note or coin
 *
 * is 20 <= 46.25? true, we subtract the value of the note from the change
 *      we still need to give back, and update the value of the change
 * change: 46.25 - 20 = 26.25
 * givenChange = {20: 1}
 *
 * is 20 <= 26.25? true, we subtract...
 * change: 26.25 - 20 = 6.25
 * givenChange = {20: 2}
 *
 * is 20 <= 6.25? false, we move on...
 *
 * this operation stops when change is 0
 *
 */

let change = 46.25;
let givenChange = {};
let cashRegister = [100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];

// if (change === paidAmount) {}
// if (paidAmount < price) {}
// for (let i = 0; i < cashRegister.length; i++) {
// /**
//  * i = 0, noteOrCoin = 100 |
//  * i = 1, noteOrCoin = 50 |
//  * i = 2, noteOrCoin = 20 |
//  * i = 2, noteOrCoin = 20 |
//  * i = 2, noteOrCoin = 20
//  * i = 3, noteOrCoin = 10
//  * */
//   let noteOrCoin = cashRegister[i];
//   if (noteOrCoin <= change) { // i = 2, 20 <= 46.25 | i = 2, 20 <= 26.25 | i = 2, 20 <= 6.25
//     change -= noteOrCoin; // i = 2, change = 26.25 | i = 2, change = 6.25
//     i--; // i = 1, i = 1
//     if (givenChange[noteOrCoin] !== undefined) {
//       givenChange[noteOrCoin]++;
//     } else {
//       givenChange[noteOrCoin] = 1;
//     }
//   }
// }

// console.log(givenChange);

// for (let i = 0; i < 100; i++) {
//     console.log(i);
//     i--;
// }

/**
 *
 * change: 46.25
 *
 * 100 false
 * 50 false
 *
 * 20 <= 46.25
 * Math.floor(46.25 / 20) -> 2
 * 46.25 - (20 * 2) -> 6.25
 */

// for (let i = 0; i < cashRegister.length; i++) {
//   let noteOrCoin = cashRegister[i];
//   if (noteOrCoin <= change) {
//     let noteQuantity = Math.floor(change / noteOrCoin);
//     change -= noteOrCoin * noteQuantity;
//     change = parseFloat(change.toFixed(2));
//     givenChange[noteOrCoin] = noteQuantity;
//   }
// }

// console.log(givenChange);

change *= 100;

for (let i = 0; i < cashRegister.length; i++) {
  let noteOrCoin = cashRegister[i] * 100;
  if (noteOrCoin <= change) {
    let noteQuantity = Math.floor(change / noteOrCoin);
    change -= noteOrCoin * noteQuantity;
    // change = change;
    givenChange[noteOrCoin / 100] = noteQuantity;
  }
}

console.log(givenChange);

/**
 * change = 46.25
 * change * 100 = 4625
 * 
 * is 10000 <= 4625 false 
 * is 5000 <= 4625 false 
 * is 2000 <= 4625 true 
 * change: 4625 - 2000 = 2625
 * 
 * is 2000 <= 2625  true
 * ...
 */