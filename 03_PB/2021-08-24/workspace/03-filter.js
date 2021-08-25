/*
    filter()

    Iterates through an array, and removes (filters out) items that don't
    pass the condition defined inside the callback
*/

function isBiggerThan5(number) {
  return number > 5;
}
let resultFilter = numbers.filter(function (number) {
  return number > 5;
});
console.log(resultFilter);

let resultFilter2 = numbers.filter(isBiggerThan5);
console.log(resultFilter2);

function alwaysTrue(number) {
  return true;
}
function alwaysFalse(number) {
  return false;
}

function multiplesOf3(number) {
  return number % 3 === 0;
}
console.log("always true", numbers.filter(alwaysTrue));
console.log("always false", numbers.filter(alwaysFalse));

console.log("multiples of 3", numbers.filter(multiplesOf3));

console.log(
  "multiples of 5",
  numbers.filter((number) => number % 5 === 0)
);

let animals = ["cat", "lion", "tiger", "catfish", "dog", "leopard"];

console.log(
  "animals that starts with 'l'",
  animals.filter((animal) => animal[0] === "l")
);
console.log(
  "animals that starts with 'l'",
  animals.filter((animal) => animal.startsWith("l"))
);
console.log(
  "animals longer than 5",
  animals.filter((animal) => animal.length > 5)
);
console.log(
  "animals cotains the letter i",
  animals.filter((animal) => animal.includes("i"))
);