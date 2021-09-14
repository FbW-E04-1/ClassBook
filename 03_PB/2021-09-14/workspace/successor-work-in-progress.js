function successor(string) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";

  for (let i = string.length - 1; i >= 0; i--) {
    let currentCharacter = string[i];
    // check if currentCharacter is a letter or a number

    // if it's a number, just increment it

    // if it's a letter, find the letter after it
    if () { // it's a number

    } else { // it's a string
        let carry = false;
    let index = alphabet.indexOf(currentCharacter.toLowerCase())
    let successorCharacter = alphabet[(index + 1) % alphabet.length]

    let isUppercase = currentCharacter === currentCharacter.toUpperCase();
    }
  }
}

successor("abcd"); // "abce"
successor("THX1138"); // "THX1139"
successor("< >"); // "< >"
successor("1999zzz"); // "2000aaa"
successor("ZZZ9999"); // "AAAA0000"



// 3 -> 4
// 123 -> 124

// 129 -> 130

// THX1138 -> THX1139
// THX1139 -> THX1140


// 1 -> 2
// 2 -> 3
// 3 -> 4
// ...
// 9 -> 10

// a -> b
// b -> c
// ...
// z -> aa

// 99 -> 100

// zz -> aaa

// 123456789
// abcdefghijklmnopqrstuvwxyz

// 97 -> a
// 98 -> b
// 99 -> c
// ...
