let person = {
    firstName: "Jessica",
    age: 28,
    job: "professional athlete",
    hobbies: ["drums", "skateboarding", "programming"]
}


// print all the keys

console.log("keys", Object.keys(person));

// print all the values 

console.log("values", Object.values(person));


// transform the object into an array

console.log("entries", Object.entries(person));
console.log(person);