2 < 3; // true
true;
false;

let isLoggedIn = false;
let userName = "Carlo";

if (isLoggedIn) {
  console.log(`Welcome, ${userName}`); // "Welcome, " + userName
} else {
  console.log("You have to be logged in to use our services!");
}

// let hour = 10;

// if (hour > 8) {
//   console.log("Wake up!");
// }

// let day = "Tuesday";

// if (day === "Saturday" || day === "Sunday") {
//   console.log("Weekend!");
// }

let money = 15;
let applePrice = 2;
let breadPrice = 3;

console.log("Let's buy 4 apples");
money = money - applePrice * 4;
// money -= applePrice * 4;

/* 
  This block of code is executed conditionally

  Only if money is more than breadPrice. If it isn't,
  it's simply skipped
*/
if (money > breadPrice) {
  console.log("Let's buy some bread");
  money = money - breadPrice;
  console.log(`After buying the bread, I have ${money} money left`);
}

console.log("Money left:", money);

console.log("/*-------------------*/");

let hour;
/* 
  If hour is greater than 8
  go inside the if block and print "Wake up"
*/
if (hour > 8) {
  console.log("Wake up!");
} else {
  // otherwise (if hour is 8, or less than 8), print "Keep sleeping"
  console.log("Keep sleeping");
}

let day = "Monday";

if (day === "Monday") {
  console.log("oh no, Monday!");
} else if (day === "Tuesday") {
  console.log("ugh, but better than Monday!");
} else if (day === "Wednesday" || day === "Thursday") {
  console.log("almost there");
} else if (day === "Friday") {
  console.log("YES, Friday");
} else if (day === "Saturday" || day === "Sunday") {
  console.log("Weekend!");
} else {
  console.log("Insert a valid day");
}

if (day === 'Monday') {
  console.log("😱");
} else if (day === "Tuesday" || day === "Wednesday") {
  console.log("😩");
} else if (day === "Thursday") {
  console.log("🤯 Almost there");
} else if (day === "Friday") {
  console.log("🍸🍺🍹");
} else {
  console.log("🛌🛌🛌🥳🎉🎉🎉🥳");
}
// let hour = 7;
// if (hour > 12) {
//   console.log("Wake up!");
// }

// BUG
// let a = 5;
// let b = 10;

// if (a = b) {
//   console.log("a and b are equal");
// }

// let hour = 9;
// let day = "Friday";

// if (hour > 8) {
//   console.log("wake up");
//   if (day === "Saturday" || day === "Sunday") {
//     console.log("go outside and take a walk");
//   } else {
//     console.log("go to work");
//   }
// } else {
//   console.log("go back to sleep");
// }

// if (hour > 12 || hour < 13 && day === "Tuesday" ) {

// }

// let a = 5;
// let b = 10;

// if (a === b) {
//   console.log("a and b are equal");
// }
// console.log(a, b);

// let day = "Monday";
// if (day === "Saturday" || day === "Sunday") {
//   console.log("Weekend!");
// }

// let isPizzaWithPineapple = true;
// if (isPizzaWithPineapple === true) {
//   console.log("Get a new pizza");
// }

/* ----------------- */

// let money = 20;
// let applePrice = 2;
// let breadPrice = 3;

// console.log("Let's buy 4 apples");
// money = money - applePrice * 4;

// if (money > breadPrice) {
//   console.log("Let's buy some bread");
//   money = money - breadPrice;
// }

// console.log("Money left:", money);

// /* ----------------- */

// let hour = 7;
// if (hour > 8) {
//   console.log("Wake up!");
// } else { // (hour < 8)
//   console.log("Keep sleeping");
// }

// /* ------------------ */

// if (hour > 9)
// console.log("wake up");

// let day = "123984320";
// if (day === "Monday") {
//   console.log("😱");
// } else if (day === "Tuesday" || day === "Wednesday") {
//   console.log("😩");
// } else if (day === "Thursday") {
//   console.log("🤯 Almost there");
// } else if (day === "Friday") {
//   console.log("🍺 🍸 🍹");
// } else if (day === "Saturday" || day === "Sunday") {
//   console.log("🛌 🛌 🛌");
// } else {
//   console.log("Please, insert a valid day of the week");
// }

// /* ------------- */

// /* ------------ */

// Scope
// let tired = true;
// let action;
// if (tired === true) {
//   action = "Take a nap";
// }

// console.log("At line 80", action);

// day = "blablajkds";
// switch (day) {
//   case "Monday":
//     console.log("😱");
//     break;
//   case "Tuesday":
//   case "Wednesday":
//     console.log("😩");
//     break;
//   case "Thursday":
//     console.log("🤯 Almost there");
//     break;
//   case "Friday":
//     console.log("🍺 🍸 🍹");
//     break;
//   case "Saturday":
//   case "Sunday":
//     console.log("🛌 🛌 🛌");
//     break;
//   default:
//     console.log("Please enter a valid day of the week");
//     break;
// }

//8. Check whether one of two integers is a multiple of 7 or 11.

// let a = 7;
// let b = 11;
// let divisibleBy7 = a % 7 === 0 || b % 7 === 0;
// let divsibleBy11 = a % 11 === 0 || b % 11 === 0;

// if (divisibleBy7 || divsibleBy11) {
//   console.log(true);
// } else {
//   console.log(false);
// }

//1. Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). Print true if either of them are in the said range.

// let a = 9;
// let b = 11;
// let divisibleBy7 = a % 7 === 0 || b % 7 === 0;
// let divsibleBy11 = a % 11 === 0 || b % 11 === 0;
// console.log(divsibleBy11);
// if (divisibleBy7 || divsibleBy11) {
//   console.log(true);
// } else {
//   console.log(false);
// }
