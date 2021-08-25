function capitalize(string) {
  if (string !== "") {
    return string[0].toUpperCase() + string.slice(1);
  } else {
    return string;
  }
}
function camelize(string) {
  let splittedString = string.split("-");

  let capitalizedString = splittedString.map(capitalize);
  return capitalizedString.join("");
}

console.log(camelize("background-color")); //== 'backgroundColor';
console.log(camelize("list-style-image")); //== 'listStyleImage';
console.log(camelize("-webkit-transition")); //== 'WebkitTransition';

// solution 2

function capitalize2(string, index) {
  return index === 0 ? string : string[0].toUpperCase() + string.slice(1);
}
function camelize2(string) {
  let splittedString = string.split("-");

  let capitalizedString = splittedString.map(capitalize2);
  return capitalizedString.join("");
}

console.log(camelize2("background-color")); //== 'backgroundColor';
console.log(camelize2("list-style-image")); //== 'listStyleImage';
console.log(camelize2("-webkit-transition")); //== 'WebkitTransition';

// exercise 2

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];

let usersMapped = users.map((user) => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id,
}));

console.log(usersMapped[0].id); // 1
console.log(usersMapped[0].fullName); // John Smith
