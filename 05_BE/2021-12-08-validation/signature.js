// The Signature of a Function consists of:
// - the name of the function
// - the list of parameters
// - the return value

// What is the "Signature" of a function
// https://developer.mozilla.org/de/docs/Web/API/Console/log

//console.log();
console.log("parameter-1");

// square brackets in documentation often refers to 'optional' things
// in this case optional parameters ("console.log(obj1 [, obj2, ..., objN]);")
// are ', obj2, ..., objN'
console.log("parameter-1", "param-2", "param-3");

// another part of the signature of a function is the 'return value'
// in case of console.log nothing is returned

// Date.now()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now#syntax
// Date.now() takes no parameters
// and returns a number - representing the milliseconds elapsed since the UNIX epoch.

console.log(Date.now());
