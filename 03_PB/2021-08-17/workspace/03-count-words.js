let text = `Tananger is a large village and urban area in Sola municipality in Rogaland county, Norway. The urban area is located on the west side of the Stavanger Peninsula between the North Sea and the Hafrsfjorden. It lies about 10 kilometres (6.2 mi) southwest of the city centre of Stavanger. Tananger Chapel (from 1879) and Tananger Church (from 2002) are both located here.[3]

The 4.46-square-kilometre (1,100-acre) village has a population (2015) of 6,377 which gives the village a population density of 1,430 inhabitants per square kilometre (3,700/sq mi).[1] Tananger has grown significantly, more than doubling in size from 1980 until 2015. Since 1 January 2017, the urban area of Tananger has been included in the Stavanger/Sandnes urban area, so separate population statistics are no longer tracked.
Tananger (mentioned in sources dated to 1608), was used as a safe haven in times of bad weather. It was considered the best and deepest harbour north of Egersund. In 1650, the village was gradually settled, as the local lobster fishing was valued for its worth as an export article. Since then, trading with lobster, fish as well as exclusive articles such as tobacco, coffee, and tea, that came with the bigger ships that sought port in storms, led to the establishment of a customs station under the main customs office in Stavanger in 1777 and it lasted here until 1958. The dangerous rocks in the seas just outside Tananger made the waters so perilous that a Piloting service existed as early as 1679, but was organised in 1720 under national control. Tananger upholds its piloting service to this day, but the customers are mostly supertankers and merchant vessels.

During the Napoleonic wars, cannon-mounted rowing boats were stationed in Tananger. During World War I, Norwegian Navy vessels were stationed here for neutrality-watch.

In 1965, the oil adventure started with Aker-Norsco establishing in Tananger as one of the first supply bases to the offshore activities.
`;

/* 

I want an object with the count of every individual word

- Keys of the object are the words inside the text
- values are the number of times the word appears

example:

wordCount = {
    the: 98,
    a: 200,
    for: 67,
    // ...
}
*/

// get a list of all the words
let words = text.split(" ");
console.log(words);

let wordsCount = {};

for (let word of words) {
  // we check if inside the object wordsCount there is already a key
  // for the current word
  if (wordsCount[word] === undefined) {
    wordsCount[word] = 1;
  } else {
    wordsCount[word]++;
  }

  // if there is the key, we increase its count
  // otherwise we add a new key and set the value to 1
  // console.log(word);
}

console.log(wordsCount);

// console.log(wordsCount.bla);

// if (wordsCount.bla === undefined) {
//   // let's add "bla" as a key and initialize to 1
//   wordsCount.bla = 1;
// } else {
//   wordsCount.bla++;
// }

// console.log(wordsCount);
