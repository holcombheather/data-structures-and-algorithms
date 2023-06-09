class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  preOrder() {
    let result = [];
    let traverse = (node) => {
      if (!node) return;
      result.push(node.value);
      for (let child of node.children) {
        traverse(child);
      }
    };
    traverse(this.root);
    return result;
  }

  postOrder() {
    let result = [];
    let traverse = (node) => {
      if (!node) return;
      for (let child of node.children) {
        traverse(child);
      }
      result.push(node.value);
    };
    traverse(this.root);
    return result;
  }

  findMaxValue() {
    if (!this.root) return null;

    let max = -Infinity;

    const traverse = (node) => {
      if (!node) return;

      if (node.value > max) {
        max = node.value;
      }

      for (let child of node.children) {
        traverse(child);
      }
    };

    traverse(this.root);

    return max;
  }
}

function breadthFirst(tree) {
  if (!tree.root) {
    return [];
  }

  let queue = [tree.root];
  let result = [];

  while (queue.length > 0) {
    let currentNode = queue.shift();
    result.push(currentNode.value);

    // Add the child nodes to the queue
    if (currentNode.children) {
      for (const child of currentNode.children) {
        queue.push(child);
      }
    }
  }

  return result;
}



module.exports = { Node, Tree, breadthFirst };
