// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
  constructor() {
    this.arr = [];
  }

  add(record) {
    this.arr.unshift(record)
  }

  remove(record) {
    this.arr.pop(record)
  }
}

const q = new Queue();
q.add(1);
console.log(q)

q.remove(1)
console.log(q)

module.exports = Queue;
