/* Template literals */


// let phoneMessage = "I'm on the phone with my friend. He just said: \"Hello!\"";

/* 
backtick `

*/

let phoneMessage = `I'm on the phone with my friend. He just said: "Hello!"`;
console.log(phoneMessage);


let escapingMessage = `To escape apostrophe or double quotes characters, I need to use the \\ character`;
console.log(escapingMessage);


/*
<div class="container">
    <div class="item">item 1</div>
    <div class="item">item 2</div>
</div>
*/

// let htmlString = '<div class="container">
//                     <div class="item">item 1</div>
//                     <div class="item">item 2</div>
//             </div>';

let htmlString = `
            <div class="container">
                    <div class="item">item 1</div>
                    <div class="item">item 2</div>
            </div>`;
console.log(htmlString);

/* ------------------------------ */

let firstName = "Carlo";
let age = 40;
let originCountry = "Italy";
let city = "Berlin";
let job = "web developer";

console.log("Hello, my name is " + firstName + ". I come from " + originCountry + " and I live in " + city + " where I work as a " + job);

console.log(`Hello, my name is ${firstName}. I'm ${age} years old. I come from ${originCountry} and I live in ${city} where I work as a ${job}`);


/* ----- */
let budget = 27;

let applePrice = 1;
let bananaPrice = 2;
let breadPrice = 4;
let tomatoPrice = 3;



let total = (applePrice * 5) + (bananaPrice * 1) + (breadPrice * 1) + (tomatoPrice * 5);
console.log("total", total);

let isBudgetEnough = budget >= total;
console.log("hasEnoughMoney", isBudgetEnough);


let outputMessage = `I went for shopping with ${budget}$.
I bought for a total of ${total}$ 
and now I'm left with ${budget - total}$`;

console.log(outputMessage);

console.log(`${1 + 2 * 6 / 5 ** 2 - 10 / 2}`);