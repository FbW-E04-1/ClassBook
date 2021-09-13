/**
 * LIFO - Last In, First Out - Stack
 *
 * We could think of this data structure as a stack (a pile) of dirty dishes:
 * we literally stuck them on top of each other and the last one we put on
 * top of the pile (Last In) is the first we was (First Out)
 *
 * Examples of LIFO:
 * ?
 * - browser return button
 * - undo operations
 *
 * Path: google
 * Path: google -> mdn array search
 * Path: google -> mdn array search -> mdn array page
 * Path: google -> mdn array search -> mdn array page -> join page
 *
 *
 * Youtube favourites:
 *
 * favourite playlist:
 *
 * video 1
 * video 2
 * video 3
 *
 * add a new video to favourites:
 *
 * new video
 * video 1
 * video 2
 * video 3
 *
 */

/**
 * .push()
 * .pop()
 */

/**
 * 0
 * 0 1
 * 0 1 2
 */
// let numbers = [];
// numbers.push(2);
// numbers.push(8);
// numbers.push(3); // <- this is the last number I inserted, this should be the first one to be removed
// console.log(numbers);

// console.log(numbers.pop()); // ?
// console.log(numbers);
// numbers.push(74);
// numbers.push(100);
// console.log(numbers);

// console.log(numbers.pop()); // ?

/**
 * Implementing a Stack class:
 *
 * add(element): add an element to the top of the stack
 * remove(): remove the top element of the stack and return the removed element
 * peek(): return the top element of the stack without modifying the stack itself
 * isEmpty(): return `true` if the stack is empty, `false` otherwise
 * clear(): remove all elements from the stack
 * size(): return the number of elements in the stack
 */

class Stack {
  constructor() {
    this.items = [];
  }
  add(item) {
    this.items.push(item);
  }
  remove() {
    return this.items.pop();
  }
  peek() {
    console.log(this.items[this.items.length - 1]);
    //console.log(this.items.slice(-1));
  }
  isEmpty() {
    return this.items.length === 0;
  }
  clear() {
    // pop all the element one by one with a for loop
    this.items = [];
  }
  size() {
    return this.items.length;
  }
  print() {
    console.log(this.items);
  }
}



let myStack = new Stack();
myStack.add(2);
myStack.add(3);
myStack.add(8);

myStack.print();
let item = myStack.remove(); // which item does it remove?
console.log(item);
myStack.print();

console.log(myStack.isEmpty());
myStack.remove();
myStack.remove();
console.log(myStack.isEmpty());
myStack.remove();
myStack.remove();
console.log(myStack.isEmpty());
