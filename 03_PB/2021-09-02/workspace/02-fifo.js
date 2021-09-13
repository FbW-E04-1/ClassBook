/**
 * FIFO - First In, First Out - Queue
 *
 * We can think of a FIFO data structure as a queue.
 * Imagine a restaurant that has to go through customer orders: the first one
 * to place an order (First In) will be the first to be served (First out)
 *
 * Examples of FIFO:
 *
 */

let numbers = [];
numbers.push(1);
numbers.push(2);
numbers.push(3);

// how can I get the number 1?

console.log(numbers.shift());

/**
 * Implementing a Queue class:
 *
 * add(element): add (enqueue) an element to the back of the queue
 * remove(): remove (dequeue) an element from the front of the queue and return the removed element
 * peek(): return the front elmeent of the queue without modifying the queue itself
 * isEmpty(): return `true` if the stack is empty, `false` otherwise
 * clear(): remove all elements from the queue
 * size(): return the number of elements in the queue
 */

/**
 *
 *  1
 *  2 - 1
 *  3 - 2 - 1
 */
class Queue {
  constructor() {
    this.items = [];
  }
  add(item) {
    this.items.push(item);
  }
  remove() {
    return this.items.shift();
  }
  peek() {
    // stack: this.items[this.items.length - 1]
    console.log(this.items[0]);
  }
  isEmpty() {
    return this.items.length === 0;
  }
  clear() {
    this.items = [];
  }
  size() {
    return this.items.length;
  }
  print() {
    console.log(this.items);
  }
}

let myQueue = new Queue();

myQueue.add(1);
myQueue.add(2);
myQueue.add(3);

myQueue.print();
myQueue.peek();
console.log(myQueue.remove());

myQueue.print();


/**
 * 
 * shift: 
 * 
 *   0   1   2   3   4   5   6
 * | a | b | c | d | e | f | g | 
 * 
 * .shift() 
 * 
 *    0   1   2   3   4   5
 *  | b | c | d | e | f | g | 
 * 
 * 
 *   0   1   2   3   4   5   6
 * | a | b | c | d | e | f | g | 
 * 
 * .pop()
 * 
 *   0   1   2   3   4   5  
 * | a | b | c | d | e | f | 
 */

/**
 * 
 * shift: 
 * 
 *   0   1   2   3   4   5   6
 * | a | b | c | d | e | f | g | 
 * 
 * .shift()
 * 
 *   1   2   3   4   5   6
 * | b | c | d | e | f | g | 
 * 
 * 1 second
 * 
 *   0   2   3   4   5   6
 * | b | c | d | e | f | g | 
 * 
 * 1 second
 * 
 *   0   1   3   4   5   6
 * | b | c | d | e | f | g | 
 * 
 * 1 second
 * 
 * ...
 */