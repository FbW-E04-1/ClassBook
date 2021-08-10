/*
    - Declare a variable named isDog. If true, print ‘pat, pat’ and if not, print ‘find me a dog to pat!’
    - Declare a variable named isStudent. If true, print “Ticket costs €5,00”. If false, print “Ticket costs €12,00".
    - Check if the following numbers are even numbers. Use a ternary and if the number is even print “30 is even”, else print “30 is odd”.
        Numbers:
        30
        939
        40.9
*/

let isDog = true;

let message = isDog ? "pat, pat" : "find me a dog to pat!";
console.log(message);

/* Solution with if...else */

let message2 = "";

if (isDog) {
  message2 = "pat, pat";
} else {
  message2 = "find me a dog to pat";
}

console.log(message2);

/* ---------------- */

let isStudent = false;
console.log(isStudent ? "Ticket costs €5,00" : "Ticket costs €12,00");

/* ---------------- */

let number = 33;

console.log(number % 2 === 0 ? `${number} is even` : `${number} is odd`);


/* Checking if a number is even or odd */

//10 / 3 = 3

/*
numberd divisible by 2 are even numbers

4 % 2 === 0
5 % 2 === 0

5
2 + 2 + 1

4
2 + 2 + 0
*/

// Check if a number is divisble by 3

4 % 3

// Check if a number is divisble by 7
// 49 % 7 === 0

// 48 % 7

// 7 + 7 + 7 + 7 + 7 + 7  = 42 + 6