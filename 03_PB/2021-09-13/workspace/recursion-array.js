let array = [1, 2, 3];

// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

let nestedArray = [1, 2, 3, [4, 5, 6]];

- recurseArray([1, 2, 3, [4, 5, 6, [7, 8, 9], 10, 11, 12]])
    - 1
    - 2
    - 3
    - recurseArray([4, 5, 6, [7, 8, 9], 10, 11, 12])
        - 4
        - 5
        - 6
        - recurseArray([7, 8, 9])
            - 7
            - 8
            - 9
    - 10
    - 11
    - 12
-



// nestedArray[3] => [4, 5, 6]
// nestedArray[3][0] => [4, 5, 6]
// nestedArray[3][0] => 4
// nestedArray[3][1] => 5

// Array.isArray()
for (let i = 0; i < nestedArray.length; i++) {
  if (Array.isArray(nestedArray[i])) {
    for (let j = 0; j < nestedArray[i].length; j++) {
      console.log(nestedArray[i][j]);
    }
  } else {
    console.log(nestedArray[i]);
  }
}

let nestedNestedArray = [1, 2, 3, [4, 5, 6, [7, 8, 9], 10, 11, 12], 13, 14, 15];

for (let i = 0; i < nestedNestedArray.length; i++) {
  if (Array.isArray(nestedNestedArray[i])) {
    for (let j = 0; j < nestedNestedArray[i].length; j++) {
      if (Array.isArray(nestedNestedArray[i][j])) {
        for (let k = 0; k < nestedNestedArray[i][j].length; k++) {
          console.log(nestedNestedArray[i][j][k]);
        }
      } else {
        console.log(nestedNestedArray[i][j]);
      }
    }
  } else {
    console.log(nestedNestedArray[i]);
  }
}

function recurseArray(array) {
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      recurseArray(array[i]);
    } else {
      console.log(array[i]);
    }
  }
}

recurseArray(array);
recurseArray(nestedArray);
recurseArray(nestedNestedArray);
recurseArray([1, 2, [[[3, [[4, 5, [6, [7, [8, [9, 10]]]]]]]]]]);
