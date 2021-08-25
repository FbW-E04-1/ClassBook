function function1() {
  console.log("function 1");
}

function function2(anotherFunction) {
  console.log("function 2");
  anotherFunction(); // function1 will be called here, because it replaces anotherFunction
}

function2(function1);

console.log("=================");

function function3() {
    console.log("function 3");
}

function function4() {
    console.log("function 4");
    function3();
}