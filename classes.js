class Test {
    constructor() {
        this.bla = "bla";
    }
}

let myTest = new Test();

console.log(myTest.bla);
console.log(typeof Test);
console.log(typeof myTest);
console.log(myTest instanceof Test);
console.log(Object.getPrototypeOf(myTest))
console.log(myTest.constructor.name)
