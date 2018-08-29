// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack {
  constructor() {
    this.arr = [];
  }

  push(rec) {
    this.arr.push(rec)
  }

  pop() {
    this.arr.pop();
  }

  peek() {
    this.arr[this.arr.length-1];
  }

}

const s = new Stack();
s.push(1);
s.pop();
console.log(s)

module.exports = Stack;
