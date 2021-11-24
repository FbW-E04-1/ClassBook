/**
 *
 * price: 52 €
 * pay with: 100 €
 *
 * total rest: 100 - 52 = 48 €
 *
 * 48 => 10 + 10 + 10 + 10 + 5 + 2 + 1
 * 48 => 20 + 20 + 5 + 2 + 1
 * 48 => 0.1 + 0.1 + 0.1 ....
 * 48 => 1 * 48
 *
 */

let billsAndCoins = [200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1];

// cash register:
// 200: 1
// 10: 1
// 5: 6 
// 2: 100
// 1: 200

// 10 + (5 * 6) + 2 + 2 + 2 + 2 

// is 200 <= 48 ? false
// is 100 <= 48 ? false
// is 50 <= 48 ? false

// is 20 <= 48 ? true 
// 48 - 20 = 28

// is 20 <= 28 ? true
// 28 - 20 = 8

// is 20 <= 8 ? false
// is 10 <= 8 ? false
// is 5 <= 8 ? true
// 8 - 5 = 3

// is 5 <= 3 ? false
// is 2 <= 3 ? true
// 3 - 2 = 1

// is 2 <= 1 ? false

// is 1 <= 1 ? true 
// 1 - 1 = 0 