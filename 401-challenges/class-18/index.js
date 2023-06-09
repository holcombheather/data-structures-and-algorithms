'use strict';

class Node {
  constructor(value, children=[]) {
    this.value = value;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }
}

function fizzBuzzTree(tree) {
  if (!tree.root) {
    return new Tree();
  }

  const newRoot = new Node(modifyValue(tree.root.value));

  const newTree = new Tree(newRoot);

  const queue = [[tree.root, newRoot]];

  while (queue.length > 0) {
    const [oldNode, newNode] = queue.shift();

    for (const oldChild of oldNode.children) {
      const newChild = new Node(modifyValue(oldChild.value));
      newNode.children.push(newChild);

      queue.push([oldChild, newChild]);
    }
  }

  return newTree;
}

function modifyValue(value) {
  let str = '';
  if (value % 3 === 0) str += 'Fizz';
  if (value % 5 === 0) str += 'Buzz';
  return str || String(value);
}

module.exports = { Node, Tree, fizzBuzzTree };
