function function1() {
    console.log("function 1");
    function2();
    console.log("ending function 1");
}
function function2() {
    console.log("function 2");
    function3();
    console.log("ending function 2");
}
function function3() {
    console.log("function 3");
}

function mainFunction() {
    console.log("main function");
    function1();
    console.log("ending main function");
}

mainFunction();

console.log("this is the end.")