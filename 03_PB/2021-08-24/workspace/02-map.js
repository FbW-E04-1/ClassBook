/*
    map() 

    Iterates through an array, and returns a new array with items inside transformed according
    to the function we pass as callback
*/

console.log(numbers);

function double(number) {
  return number * 2;
}

function isEven(number) {
  if (number % 2 === 0) {
    return number;
  }
}

let mapResult = numbers.map(function (number) {
  console.log("number is", number);
  return number * 2;
});

console.log(mapResult);

console.log("double", numbers.map(double));
console.log("even", numbers.map(isEven));

let people = [
  {
    firstName: "john",
    lastName: "smith",
    // fullName: "john smith"
  },
  {
    firstName: "jen",
    lastName: "host",
    // fullName: "jen host"
  },
  {
    firstName: "max",
    lastName: "power",
  },
  {
    firstName: "lisa",
    lastName: "green",
  },
  {
    firstName: "rudolph",
    lastName: "red",
  },
];

function addFullName(person) {
    let clone = {...person};
    // clone.fullName = `${clone.firstName} ${clone.lastName}`;
    clone.fullName = clone.firstName + " " + clone.lastName;
    // console.log("clone", clone);
    // console.log("clone fullName", clone.fullName);
    // console.log("clone firstName", clone.firstName);
    // console.log("clone lastName", clone.lastName);
    return clone;
}

let modifiedPeople = people.map(addFullName)
console.log("modified people", modifiedPeople);
console.log("people", people);
