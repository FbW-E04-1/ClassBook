let array = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];
let newArray = array;

// newArray[0] = 100;

// console.log("array", array);
// console.log("newArray", newArray);

// let arrayClone = [...array];

// arrayClone[0] = 99;

// console.log("array", array);
// console.log("newArray", newArray);
// console.log("arrayClone", arrayClone);

// arrayClone[3][0] = 99999;

// console.log("array", array);
// console.log("newArray", newArray);
// console.log("arrayClone", arrayClone);

function deepClone(array) {
    let clone = [];
    for (let item of array) {
        if (Array.isArray(item)) {
            let clonedItem = deepClone(item);
            clone.push(clonedItem);
        } else {
            clone.push(item);
        }
    }
    return clone;
}

let clonedArray = deepClone(array);

console.log("array", array);
console.log("clonedArray",clonedArray);

clonedArray[0] = 99;
clonedArray[3][0] = 999;
clonedArray[3][3][0] = 9999;

console.log("array", array);
console.log("clonedArray",clonedArray);