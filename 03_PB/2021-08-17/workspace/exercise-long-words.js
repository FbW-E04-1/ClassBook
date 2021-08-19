/* 
    Write a loop that goes through the whole array of words
    and prints only the ones that have more than 5 letters.

    - start by using a normal for loop
    - then do the same using a for...of loop


     - print the total number of words that have more than 5 letters
     - print only words that start with “p”
     - print the total number of vowels among all  words
*/

let words = [
  "house",
  "dinosaur",
  "basket",
  "book",
  "dog",
  "JavaScript",
  "microphone",
  "universe",
  "revolution",
  "phone",
  "pen",
];

let longWordsCount = 0;
for (let word of words) {
  if (word.length > 5) {
    console.log(word);
    longWordsCount++;
  }
}

console.log("The words longer than 5 letters are:", longWordsCount);

for (let word of words) {
  if (word[0].toLowerCase() === "p") {
    // word.slice(0, 1) === "p"
    console.log(word);
  }
}

let vowels = "aeiou";
let vowelsCount = 0;
for (let word of words) {
  for (let letter of word) {
    console.log(letter);
    if (vowels.includes(letter)) {
      vowelsCount++;
    }
  }
}

console.log("The vowels count is:", vowelsCount);

// this solution is wrong
let vowelsCount2 = 0;
for (let word of words) {
  for (let vowel of vowels) {
    if (word.includes(vowel)) {
      vowelsCount2++;
    }
  }
}

console.log("The vowels count is:", vowelsCount2);
/* 
    Write a loop that goes through the whole basket and prints only 
    items that are fruit.

    - first use a regular for loop
    - then do the same using a for...of

    After you've done that, also calculate the total price for the fruit
    in the basket
*/

let basket = [
  {
    name: "banana",
    type: "fruit",
    price: 1,
  },
  {
    name: "zucchini",
    type: "vegetable",
    price: 3,
  },
  {
    name: "aubergine",
    type: "vegetable",
    price: 2,
  },
  {
    name: "apple",
    type: "fruit",
    price: 1,
  },
  {
    name: "potato",
    type: "vegetable",
    price: 1,
  },
  {
    name: "lemon",
    type: "fruit",
    price: 2,
  },
];

let fruitTotalPrice = 0;
for (let item of basket) {
  if (item.type === "fruit") {
    console.log(item.name);
    fruitTotalPrice += item.price;
  }
}

console.log("Fruit in the basket cost:", fruitTotalPrice);
