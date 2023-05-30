'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    let newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error('Stack is empty');
    }
    let poppedValue = this.top.value;
    this.top = this.top.next;
    return poppedValue;
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error('Stack is empty');
    }
    return this.top.value;
  }

  isEmpty() {
    return this.top === null;
  }
}

// class Queue {
//   constructor() {
//     this.front = null;
//     this.rear = null;
//   }

//   enqueue(value) {
//     let newNode = new Node(value);
//     if (this.isEmpty()) {
//       this.front = newNode;
//       this.rear = newNode;
//     } else {
//       this.rear.next = newNode;
//       this.rear = newNode;
//     }
//   }

//   dequeue() {
//     if (this.isEmpty()) {
//       throw new Error('Queue is empty');
//     }
//     let dequeuedValue = this.front.value;
//     this.front = this.front.next;
//     if (this.front === null) {
//       this.rear = null;
//     }
//     return dequeuedValue;
//   }

//   peek() {
//     if (this.isEmpty()) {
//       throw new Error('Queue is empty');
//     }
//     return this.front.value;
//   }

//   isEmpty() {
//     return this.front === null;
//   }
// }

class PseudoQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value) {
    while (!this.stack1.isEmpty()) {
      this.stack2.push(this.stack1.pop());
    }
    this.stack1.push(value);
    while (!this.stack2.isEmpty()) {
      this.stack1.push(this.stack2.pop());
    }
  }
  dequeue() {
    if (this.stack1.isEmpty()) {
      return null;
    }
    return this.stack1.pop();
  }
}

module.exports = { Node, Stack, PseudoQueue };
