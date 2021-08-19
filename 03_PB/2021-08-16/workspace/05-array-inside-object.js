let person = {
    firstName: "Jessica",
    age: 28,
    job: "professional athlete",
    hobbies: ["drums", "skateboarding", "programming"]
}

console.log(person.hobbies);
console.log(person.hobbies[0]);
console.log(person.hobbies[1]);
console.log(person.hobbies[2]);

// print  all the hobbies

for (let i = 0; i < person.hobbies.length; i++) {
    console.log(person.hobbies[i]);
}