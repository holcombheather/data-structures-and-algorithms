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

  kthFromTheEnd(k) {

    let tailFinder = this.head;
    let count = 0;
    let current = null;

    while (tailFinder !== null) {
      if (count > k - 1) {
        if (current === null) {
          current = this.head;
        } else {
          current = current.next;
        }
      }
      tailFinder = tailFinder.next;
      count++;
    }
    if (k > count) {
      return null;
    } if (k < 0) {
      return null;
    } else {
      return current.value;
    }

  }
}



const zipList = (list1, list2) => {
  let current1 = list1.head;
  let current2 = list2.head;

  while (current1 && current2) {
    let next1 = current1.next;
    let next2 = current2.next;
    current1.next = current2;
    if (next1) {
      current2.next = next1;
    }
    current1 = next1;
    current2 = next2;

  }

  return list1.head ? list1 : list2;
};


let list = new LinkedList();
list.append('a');
list.append('b');
list.append('c');
list.append('d');

console.log(JSON.stringify(list));
// console.log(list.includes('d'));
// console.log(list.append('f'));
// console.log(list.insertAfter('d','f'));
// console.log(list.insertBefore('b','f'));
// console.log('kthFromTheEnd', list.kthFromTheEnd(2));

let list1 = new LinkedList();
list1.append('1');
list1.append('2');
list1.append('3');
list1.append('4');

let list2 = new LinkedList();
list2.append('a');
list2.append('b');
list2.append('c');
list2.append('d');

console.log(JSON.stringify(list1));
console.log(JSON.stringify(list2));
let zipResult = zipList(list1, list2);
console.log(JSON.stringify(zipResult));

module.exports = { LinkedList, zipList };
