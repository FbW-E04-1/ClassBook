function greetGerman() {
  return "Hallo";
}

function greetItalian() {
  return "Ciao";
}

function greetEnglish() {
  return "Hello";
}

function greet(name, callback) {
  console.log(`${callback()}, ${name}`); // greetEnglish() => "Hello"
}

greet("carlo", greetEnglish);
greet("max", greetItalian);
greet("marta", greetGerman);
greet("jen", greetGerman);

greet("david", function () {
  return "Hola";
});

greet("david", () => "Hola");
