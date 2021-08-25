function printMessage() {
  console.log("Hello, I'm the callback");
}
function printMessage2() {
  console.log("message 2");
}
function printMessage3() {
  console.log("message 3");
}

function myFunction(anotherFunction) {
  // anotherFunction will become printMessage

  console.log("hello, I'm inside the function");
  anotherFunction();

  // here we will call printMessage
}

//   let number = "carlo";
myFunction(printMessage);
myFunction(printMessage2);
myFunction(printMessage3);


function evenOr0(number) {
    return number % 2 === 0 ? number : 0;
}

function map(array, callback) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
      let newValue = callback(array[i]);
      result.push(newValue);
    }
    return result;
  }

  console.log(map([1, 2, 3, 4, 5, 6], evenOr0));