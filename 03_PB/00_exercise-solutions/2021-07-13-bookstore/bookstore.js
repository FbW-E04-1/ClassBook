/* 
    You work as a developer at an online bookstore.
    The sales team sent you some data from the sales of the last 4 months and you have to prepare a report for the web.

    Instructions:
    - all the variables provided are set to 0, so in order to check that your code works you have to change them to different values
    - if you think you need additional variables, feel free to create them
    - some variables must be used in more than one exercise
    - every exercise mentions if...else statement, but in some cases you might need to use also the "else if"
*/

let sales = 99;

/*
    Exercise 1:
    You want to check that the total sales are within a certain range.

    - complete the if...else statement so that the result is true if sales are greater than or equal to 70 and less than or equal to 99 
*/

if (sales >= 70 && sales <= 99) {
  console.log("Sales are: " + sales + ". Are they between 70 and 99?", true);
} else {
  console.log("Sales are: " + sales + ". Are they between 70 and 99?", false);
}

/*
    Exercise 2:
    You receive a report with the sales from the Sci-fi department and the Crime department.
    You want to check that the sales of at least one of the two departments are within a certain range, otherwise it's bad news for the store 

    - write an if...else statement that prints true if at least one of the 2 sales amount is in the range between 200 and 500, false otherwise
    */

let sciFiDepartmentSales = 0;
let crimeDepartmentSales = 300;

/* 
    Solution 1:

    One option for the solution would be to save in 2 separate variables 
    the result of the 2 conditions, and then use the variables inside the if().
    This makes the code much more readable
*/
let isSciFiSalesInRange =
  sciFiDepartmentSales >= 200 && sciFiDepartmentSales <= 500;
let isCrimeSalesInRange =
  crimeDepartmentSales >= 200 && crimeDepartmentSales <= 500;

if (isSciFiSalesInRange || isCrimeSalesInRange) {
  console.log(true);
} else {
  console.log(false);
}

/* 
    Solution 2:

    This approach is also perfectly fine, but you can see that it's harder to read
    */

if (
  (sciFiDepartmentSales >= 200 && sciFiDepartmentSales <= 500) ||
  (crimeDepartmentSales >= 200 && crimeDepartmentSales <= 500)
) {
  console.log(true);
} else {
  console.log(false);
}

/*
    Exercise 3:
    You also receive the report from the Comic Book department.
    Using the variables from Exercise 2, check that at least one of the three departments sold enough.

    - write an if...else statement that prints true if at least one of the 3 sales amount is in the range between 200 and 500, false otherwise
*/

let comicBookDepartmentSales = 300;
let isComicBookSalesInRange =
  comicBookDepartmentSales >= 200 && comicBookDepartmentSales <= 500;

if (isSciFiSalesInRange || isCrimeSalesInRange || isComicBookSalesInRange) {
  console.log(true);
} else {
  console.log(false);
}

/*
    Exercise 4:
    This year, two departments have gone pretty well in your store: cooking books and drawing books.
    You want to check if both of them managed to sell more than 300 units each.

    - write an if...else statement that prints true if the 2 sales amounts are both greater than 300, false otherwise
*/

let cookingDepartmentSales = 350;
let drawingDepartmentSales = 450;

if (cookingDepartmentSales > 300 && drawingDepartmentSales > 300) {
  console.log(true);
} else {
  console.log(false);
}

/*
    Exercise 5:
    You also want to know which one between the cooking books and drawing books sold more.

    - write an if...else statement that prints the value of the largest number and the name of that department
    example: cookingDepartmentSales = 400, drawingDepartmentSales = 500 - output: "Drawing Department", 500 
*/

/* The case where they are equal is not mandatory for the exercise, but I decided to put
it in the solution */

if (cookingDepartmentSales > drawingDepartmentSales) {
  console.log("cooking department", cookingDepartmentSales);
} else if (drawingDepartmentSales > cookingDepartmentSales) {
  console.log("drawing department", drawingDepartmentSales);
} else {
  console.log("equal sales", drawingDepartmentSales);
}

/*
    Exercise 6:
    You also want to know which one between the sci-fi, crime and comic books sold more.

    - write an if...else statement that prints the value of the largest number and the name of that department
*/

/* Solution 1 */

cookingDepartmentSales = 550;
drawingDepartmentSales = 150;
comicDepartmentSales = 450;

if (
  cookingDepartmentSales > drawingDepartmentSales &&
  cookingDepartmentSales > comicDepartmentSales
) {
  console.log("cooking department", cookingDepartmentSales);
} else if (
  drawingDepartmentSales > cookingDepartmentSales &&
  drawingDepartmentSales > comicDepartmentSales
) {
  console.log("drawing department", drawingDepartmentSales);
} else {
  console.log("comic department", comicDepartmentSales);
}

/* 
    Solution 2

    This is probably the optimal solution. It might be a bit trickier to understand,
    but see if you can follow the logic and explain why it works
*/
let maximum = cookingDepartmentSales;
let bestSellingDepartment = "cooking department";

if (drawingDepartmentSales > maximum) {
  maximum = drawingDepartmentSales;
  bestSellingDepartment = "drawing department";
}

if (comicDepartmentSales > maximum) {
  maximum = comicDepartmentSales;
  bestSellingDepartment = "comic department";
}

console.log(bestSellingDepartment, maximum);

/*
    Exercise 7:
    You want to check if the sales of sci-fi, crim and comic books all together surpassed the sales of the same period last year and if they reached the set goal for this year.

    - calculate the sum of the 3 department sales
    - write an if...else statement that prints:
        - a sad face, if sales are less than the ones from last year
        - "good, but we can do better", if sales are greater than the sales from last year, but less than the goal
        - "YEEEEEEESSSS!", if sales are greater than the goal

*/

let totalSales =
  sciFiDepartmentSales + crimeDepartmentSales + comicDepartmentSales;
let totalSalesLastYear = 500;
let totalSalesGoal = 600;

if (totalSales < totalSalesLastYear) {
  console.log(`: (`);
} else if (totalSales < totalSalesGoal) {
  // I don't need to repeat the first condition
  console.log(`Good, but we can do better`);
} else {
  // I don't need to repeat the 2 previous conditions
  console.log(`YEEEEEEESSSS!😁`);
}

/*
    Exercise 8:
    You have to add a new feature to the website that shows a custom greeting message if a user is logged in.

    - write an if...else statement to print the message "Hello, Carlo!" if a user is logged in (and if their name is Carlo, of course), simply "Hello" otherwise
    - create a variable for the name of the user and a variable to specify if the user is logged in or not
*/

let userName = "Thomas";
let isLogedIn = true;

if (isLogedIn) {
  console.log(`Hello, ${userName}`);
} else {
  console.log("Hello");
}

/*
    Exercise 9:
    The marketing is running a promotion on weekends.

    - write an if...else statement to apply a 50% discount to the price of books if the day is Saturday or Sunday
*/

let bookPrice = 16;
let day = "Sunday";

if (day === "Saturday" || day === "Sunday") {
    bookPrice = bookPrice / 2;
}

console.log("The book price is:", bookPrice);
