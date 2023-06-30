'use strict';

const { BinaryTree, Node, treeIntersection } = require('./tree-intersection');

describe('treeIntersection', () => {
  it('should find common values in 2 binary trees', () => {
    const tree1 = new BinaryTree();
    tree1.root = new Node(150);
    tree1.root.left = new Node(100);
    tree1.root.right = new Node(250);
    tree1.root.left.left = new Node(75);
    tree1.root.left.right = new Node(160);

    const tree2 = new BinaryTree();
    tree2.root = new Node(200);
    tree2.root.left = new Node(100);
    tree2.root.right = new Node(350);
    tree2.root.left.left = new Node(20);
    tree2.root.left.right = new Node(160);

    const result = treeIntersection(tree1, tree2);
    expect(result).toEqual([100, 160]);
  });

  it('should return an empty array if there are no common values', () => {
    const tree1 = new BinaryTree();
    tree1.root = new Node(1);
    tree1.root.left = new Node(2);
    tree1.root.right = new Node(3);

    const tree2 = new BinaryTree();
    tree2.root = new Node(4);
    tree2.root.left = new Node(5);
    tree2.root.right = new Node(6);

    const result = treeIntersection(tree1, tree2);
    expect(result).toEqual([]);
  });

  it('should return an empty array if one or both of the trees are empty', () => {
    const tree1 = new BinaryTree();
    tree1.root = new Node(1);
    tree1.root.left = new Node(2);
    tree1.root.right = new Node(3);

    const tree2 = new BinaryTree();

    const result = treeIntersection(tree1, tree2);
    expect(result).toEqual([]);
  });
});
