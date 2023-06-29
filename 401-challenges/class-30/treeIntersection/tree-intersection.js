'use strict';

const { Hashtable } = require('../index');

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
}

function treeIntersection(binaryTree1, binaryTree2) {
  // Initialize hashtable and results array
  const hashtable = new Hashtable();
  const results = [];

  // Helper function for tree traversal (pre-order)
  function _preOrder(node, callback) {
    if (node) {
      callback(node.value);
      _preOrder(node.left, callback);
      _preOrder(node.right, callback);
    }
  }

  // Traverse tree1 and set each value in the hashtable
  _preOrder(binaryTree1.root, value => hashtable.set(value, true));

  // Traverse tree2 and check if each value exists in the hashtable
  _preOrder(binaryTree2.root, value => {
    if (hashtable.has(value)) {
      results.push(value);
    }
  });

  return results;
}

module.exports = { Node, BinaryTree, treeIntersection };
