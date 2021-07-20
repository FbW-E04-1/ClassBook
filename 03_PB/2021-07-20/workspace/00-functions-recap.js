function line() {
    console.log();
    console.log("------------------------------------");
    console.log();
}

/* Write a function that takes 2 numbers in input and prints their sum */


function sum(number1, number2) {
    console.log(number1 + number2);
}

sum(3, 4);
sum(5, 4);
sum(-5, -104);
sum(-5.2, -2.6);

line();

/* Write a function that takes 2 numbers in input and prints their difference */
function subtract(a, b) {
    console.log(a - b);
}

subtract(6, 4);
subtract(3, 8);
subtract(10, 2);
subtract(10, 102);

line();


/* 
    Write a function that takes 2 numbers in input and prints their difference,
 but the result should always be a positive number or 0 */

 /* 
    1. calculate the difference between a and b
    2. check if the difference is a negative number (if it's less than 0)
    3. if it is a negative number, multiply it by -1
    4. print the result
 */

function positiveSubtract(a, b) {
    let sub = a - b;
    if (sub < 0) {
        sub = sub * -1;
    }
    console.log(sub);
}

positiveSubtract(10, 4); // 6
positiveSubtract(4, 4); // 0
positiveSubtract(3, 8); // instead of -5, 5

function positiveSubtract2(a, b) {
    let result;
    if (a < b) {
        result = b - a;
    } else {
        result = a - b;
    }
    console.log(result);
}
positiveSubtract2(10, 4); // 6
positiveSubtract2(4, 4); // 0
positiveSubtract2(3, 8); // instead of -5, 5

function positiveSubtract3(a, b) {
    let result = Math.abs(a - b);
    console.log(result);
}
positiveSubtract3(10, 4); // 6
positiveSubtract3(4, 4); // 0
positiveSubtract3(3, 8); // instead of -5, 5


line();

/* Write a function that sums 2 numbers, but if one of the arguments is not a number, prints a warning message */
function sumWithValidation(a, b) {
    if (typeof(a) === "number" && typeof(b) === "number") {
        console.log(a + b);
    } else {
        console.log("Please, only use numbers");
    }
}

sumWithValidation(2, 4); // 6
sumWithValidation(3, 9); // 12 
sumWithValidation("3", 9); // Please, only use numbers
sumWithValidation("bla", "blablabla"); // Please, only use numbers
sumWithValidation(true, []); // Please, only use numbers

function sumWithValidation2(a, b) {
    let number1 = parseFloat(a);
    let number2 = parseFloat(b);
    if (isNaN(number1) || isNaN(number2)) {
        console.log("Please, only use numbers");
    } else {
        console.log(number1 + number2);
    }
}

sumWithValidation2(2, 4); // 6
sumWithValidation2(3, 9); // 12 
sumWithValidation2("3", 9); // 12
sumWithValidation2("bla", "blablabla"); // Please, only use numbers
sumWithValidation2(true, []); // Please, only use numbers