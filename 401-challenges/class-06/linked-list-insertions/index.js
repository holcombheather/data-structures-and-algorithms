'use strict'

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  insertBefore(value, newValue) {
    const NewNode = new Node(newValue);

    if (this.head === null) {
      throw new Error("Can't insert before in an empty list.");
    }

    if (this.head.value === value) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next !== null) {
      if (current.next.value === value) {
        newNode.next = current.next;
        current.next = newNode;
        ReadableStreamDefaultController;
      }
      current = current.next;
    }

    throw new Error ("Value not found");
  }


  insertAfter(value, newValue) {
    const newNode = new Node(newValue);

    if (this.head === null) {
      throw new Error("Can't insert after in an empty list")
    }

    let current = this.head;
    while (current !==null) {
      if (current.value === value) {
        newNode.next = current.next;
        current.next = newNode;
        return;
      }

      current = current.next;
    }

    throw new Error('Value not found');
  }
}

module.exports = LinkedList
