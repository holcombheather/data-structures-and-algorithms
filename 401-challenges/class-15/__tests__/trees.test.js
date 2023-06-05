const { Node, BinaryTree, BinarySearchTree } = require('../index');

describe('Binary Tree and Binary Search Tree', () => {
  it('can successfully instantiate an empty tree', () => {
    const tree = new BinaryTree();
    expect(tree.root).toBe(null);
  });

  it('can successfully instantiate a tree with a single root node', () => {
    const tree = new BinaryTree(new Node(5));
    expect(tree.root.value).toBe(5);
  });

  it('can successfully add a left child and right child to a node in a Binary Search Tree', () => {
    const bst = new BinarySearchTree(new Node(10));
    bst.add(5);
    bst.add(15);
    expect(bst.root.left.value).toBe(5);
    expect(bst.root.right.value).toBe(15);
  });

  it('can successfully return a collection from a pre-order traversal', () => {
    const bst = new BinarySearchTree();
    bst.add(8);
    bst.add(3);
    bst.add(10);
    bst.add(1);
    bst.add(6);
    bst.add(14);
    bst.add(4);
    bst.add(7);
    bst.add(13);
    expect(bst.preOrder()).toEqual([8, 3, 1, 6, 4, 7, 10, 14, 13]);
  });

  it('can successfully return a collection from an in-order traversal', () => {
    const bst = new BinarySearchTree();
    bst.add(8);
    bst.add(3);
    bst.add(10);
    bst.add(1);
    bst.add(6);
    bst.add(14);
    bst.add(4);
    bst.add(7);
    bst.add(13);
    expect(bst.inOrder()).toEqual([1, 3, 4, 6, 7, 8, 10, 13, 14]);
  });

  it('can successfully return a collection from a post-order traversal', () => {
    const bst = new BinarySearchTree();
    bst.add(8);
    bst.add(3);
    bst.add(10);
    bst.add(1);
    bst.add(6);
    bst.add(14);
    bst.add(4);
    bst.add(7);
    bst.add(13);
    expect(bst.postOrder()).toEqual([1, 4, 7, 6, 3, 13, 14, 10, 8]);
  });

  it('returns true for the contains method, given an existing node value', () => {
    const bst = new BinarySearchTree();
    bst.add(8);
    bst.add(3);
    bst.add(10);
    bst.add(1);
    bst.add(6);
    bst.add(14);
    bst.add(4);
    bst.add(7);
    bst.add(13);
    expect(bst.contains(10)).toBe(true);
  });

  it('returns false for the contains method, given a non-existing node value', () => {
    const bst = new BinarySearchTree();
    bst.add(8);
    bst.add(3);
    bst.add(10);
    bst.add(1);
    bst.add(6);
    bst.add(14);
    bst.add(4);
    bst.add(7);
    bst.add(13);
    expect(bst.contains(20)).toBe(false);
  });
});
