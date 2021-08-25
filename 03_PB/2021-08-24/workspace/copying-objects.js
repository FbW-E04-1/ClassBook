let animal = {
  name: "mia",
  type: "cat",
  color: "black",
  age: 3,
};

let animal2 = animal;

console.log(animal2 === animal);

animal.name = "raphael";

console.log(animal.name);
console.log(animal2.name);

// let's clone the animal

let clone = { ...animal };

console.log("are clone and animal the same?", clone === animal);

// let's change the name for the clone
clone.name = "jesse";

console.log("animal names", animal.name);
console.log("clone name", clone.name);

function changeName(animal) {
  let clone = { ...animal };
  clone.name = "changed";
  return clone;
}

let newAnimal = changeName(animal);

console.log(newAnimal === animal);
console.log(animal);
console.log(newAnimal);
