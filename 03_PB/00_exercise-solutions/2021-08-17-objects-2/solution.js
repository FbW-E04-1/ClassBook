// 1. Number Within Range

function isWithinRange(num, obj) {
    if (num >= obj.min && num <= obj.max) {
        return true;
    } else {
        return false;
    }
 }
 
 console.log(isWithinRange(4, { min: 4, max: 5 }));
 
 // 2. Scrabble
 
 const scrabbleHand = [
     { tile: "N", score: 1 },
     { tile: "K", score: 5 },
     { tile: "Z", score: 10 },
     { tile: "X", score: 8 },
     { tile: "D", score: 2 },
     { tile: "A", score: 1 },
     { tile: "E", score: 1 }
 ];
 
 function calcMaxScrabbleScore(tiles) {
     let total = 0;
     for (let i = 0; i < tiles.length; i++) {
         total += tiles[i]['score'];
     }
     return total;
 }
 
 console.log(calcMaxScrabbleScore(scrabbleHand));
 
 // 3. Empty Object?
 
 function isEmpty(obj) {
     return Object.keys(obj).length === 0;
 }
 
 console.log(isEmpty({}));
 console.log(isEmpty({ a: "a" }));
 console.log(isEmpty({1 : 1}));
 
 // 4. Counting Letters
 
 function countLetters(str) {
     const strToArr = str.split("");
     const letterCount = {};
     for (let i = 0; i < strToArr.length; i ++) {
         if (letterCount[strToArr[i]] !== undefined) {
             letterCount[strToArr[i]]++;
         }  else {
             letterCount[strToArr[i]] = 1;
         }
     }
     return letterCount;
 }
 
 console.log(countLetters("woolloomooloo"));
 
 // 5. Free Shipping
 
 function freeShipping(object) {
     const orderArray = Object.values(object);
     let total = 0;
     for (let i = 0; i < orderArray.length; i ++) {
         total += orderArray[i];
     }
     return total > 50;
 }
 
 console.log(freeShipping({ "Sponge": 3.50, "Soap": 9.99 }));
 
 console.log(freeShipping({ "Surround Sound Equipment": 499.99 }));
 
 console.log(freeShipping({ "Wool": 13.99, "Knitting Needles": 15.50, "Bag": 13.99 }));
 
 // 6. Programming Object
 
 const programming = {
   languages: ["JavaScript", "Python", "Ruby"],
   isChallenging: true,
   isRewarding: true,
   difficulty: 8,
   jokes:
     "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
 };
 
 programming.languages.push("Go");
 console.log(programming);
 
 programming.difficulty = 7;
 console.log(programming);
 
 delete programming.jokes;
 console.log(programming);
 
 programming.isFun = true;
 console.log(programming);
 
 for (let i = 0; i < programming.languages.length; i ++) {
     console.log(programming.languages[i]);
 };
 
 const myKeysArr = Object.keys(programming);
 for (const key of myKeysArr) {
     console.log(key);
 }
 
 const myValuesArr = Object.values(programming);
 for (const values of myValuesArr) {
     console.log(values);
 }
 
 programming.worthwhile = () => {
   if (programming.isChallenging && programming.isRewarding) {
     return `Learning the programming languages: ${programming.languages} is rewarding and challenging.`;
   }
 };
 
 console.log(programming.worthwhile())
 
 //`console.log` itself uses the Object.keys() method on objects, which can only return enumerable properties. For example, since functions are not enumerable, we only see `[Function]`, when we console.log(programming).
 
 Object.seal(programming);
 Object.freeze(programming); // you can not add new item and also you cannot change the value of the Old one
 
 delete programming.languages;
 console.log(programming);
 
 let changeValue = programming.languages = "new value"
 console.log(programming) // nothing happen for the Object - because of the .freeze()
 