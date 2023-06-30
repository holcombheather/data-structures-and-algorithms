'use strict';

class Node {
  constructor(key, value, next = null) {
    this.key = key;
    this.value = value;
    this.next = next;
  }
}

class Hashtable {
  constructor(size = 100) {
    this.size = size;
    this.table = new Array(size);
  }

  hash(key) {
    let hashValue = 0;
    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }
    return hashValue % this.size;
  }

  set(key, value) {
    const index = this.hash(key);

    if (this.table[index]) {
      let node = this.table[index];
      while (node) {
        if (node.key === key) {
          node.value = value;
          return;
        }
        if (!node.next) {
          node.next = new Node(key, value);
          return;
        }
        node = node.next;
      }
    } else {
      this.table[index] = new Node(key, value);
    }
  }

  get(key) {
    const index = this.hash(key);
    let node = this.table[index];
    while (node) {
      if (node.key === key) {
        return node.value;
      }
      node = node.next;
    }
    return undefined;
  }

  has(key) {
    const index = this.hash(key);
    let node = this.table[index];
    while (node) {
      if (node.key === key) {
        return true;
      }
      node = node.next;
    }
    return false;
  }

  keys() {
    const keys = [];
    for (let i = 0; i < this.size; i++) {
      let node = this.table[i];
      while (node) {
        keys.push(node.key);
        node = node.next;
      }
    }
    return keys;
  }
}

function leftJoin(hm1, hm2) {
  let result = [];
  for (let key in hm1) {
    if (hm1.hasOwnProperty(key)) {
      let value1 = hm1[key];
      let value2 = hm2.hasOwnProperty(key) ? hm2[key] : null;
      result.push([key, value1, value2]);
    }
  }
  return result;
}

module.exports = { Node, Hashtable, leftJoin };
