function double(number) {
    return number * 2;
}


function printDoubleValues(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        console.log(double(numbers[i])); // console.log(numbers[i] * 2);
    }
}

printDoubleValues([1, 2, 3, 10, 90, 5, 25]);

console.log(double(2));
console.log(double(9));
console.log(double(100));