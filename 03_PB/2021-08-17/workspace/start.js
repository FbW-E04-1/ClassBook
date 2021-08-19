function inRange(number, range) {
}

inRange(2, {min: 2, max: 4}); // true
inRange(3, {min: 5, max: 10}); // false 
inRange(5, {min: 0, max: 4}); // false 
inRange(10, {min: 0, max: 100}); // true