/* 
    for...in

    It iterates over arrays or objects, giving back the current "key" at every
    iteration.

    - In the case of an array, the key will simply be a numerical index
    - in the case of an object, the key will be the name of a property
*/

let animals = ["cat", "dog", "sheep"];

for (let index in animals) {
  console.log(index);
  console.log(animals[index]);
}

let person = {
  firstName: "Jessica",
  age: 28,
  job: "professional athlete",
  hobbies: ["drums", "skateboarding", "programming"],
};

for (let key in person) {
    /*
        At every iteration "key" will be a string containing:
        "firstName", "age", "job", "hobbies"

        We can use this string together with the "person" object, to get 
        the value for that specific key:

        person["firstName"] // "Jessica"
        person["age"] // 28 
        ...
     */
    // console.log(key);
    console.log(person[key]); // person["firstName"], person["age"], person["job"]
}
