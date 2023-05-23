'use strict';

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

  insert(value){
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
  }

  // adds a node to the END of a linked list
  append(value){
    let node = new Node(value);
    // if the head is null, we need to assign this new to the head as well
    if(!this.head){
      // in other words, if the list was empty, do this and done
      this.head = node;
      return;
    }
    let current = this.head;
    while(current.next){
      current = current.next;
    }
    current.next = node;

  }

  // iteratively traverse linked list and do a thing
  traversal(){
    let current = this.head;

    while(current){
      // do the thing
      console.log(current.value);
      current = current.next;
    }
  }

  includes(value) {
    let current = this.head;
    while (current !== null) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  toString() {
    let current = this.head;
    let result = '';

    while (current !== null) {
      result += `{ ${current.value} } -> `;
      current = current.next;
    }

    return result + 'NULL';
  }

  insertBefore(value, newValue) {
    const newNode = new Node(newValue);

    if (this.head === null) {
      throw new Error('Can\'t insert before in an empty list.');
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
        return;
      }
      current = current.next;
    }

    throw new Error ('Value not found');
  }

  insertAfter(value, newValue) {
    const newNode = new Node(newValue);

    if (this.head === null) {
      throw new Error('Can\'t insert after in an empty list');
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

let list = new LinkedList();
list.append('a');
list.append('b');
list.append('c');
list.append('d');

console.log(JSON.stringify(list));
console.log(list.includes('d'));
console.log(list.append('f'));
console.log(list.insertAfter('d','f'));
console.log(list.insertBefore('b','f'));
module.exports = LinkedList;
