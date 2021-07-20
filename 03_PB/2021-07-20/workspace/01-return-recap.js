function line() {
  console.log();
  console.log("------------------------------------");
  console.log();
}

function sum(number1, number2) {
  let result = number1 + number2;
  console.log("inside the function", result);
  return result;
}

function sum2(number1, number2) {
  return number1 + number2;
}

let mySum = sum(1, 2);
console.log("outside the function", mySum);

console.log(sum(4, 5));

line();

/* */

function getMessage(language) {
  switch (language) {
    case "en":
      return "Hello";
    case "de":
      return "Hallo";
    case "it":
      return "Ciao";
    case "es":
      return "Hola";
  }
}

console.log(getMessage("en"));
console.log(getMessage("de"));
console.log(getMessage("it"));
console.log(getMessage("es"));
