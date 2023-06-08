const { Node, Tree, breadthFirst } = require('../index');

describe('Tree', () => {
  let tree;
  beforeEach(() => {
    tree = new Tree(new Node(1));
    tree.root.children.push(new Node(2));
    tree.root.children.push(new Node(3));
    tree.root.children[0].children.push(new Node(4));
    tree.root.children[0].children.push(new Node(5));
    tree.root.children[1].children.push(new Node(6));
    tree.root.children[1].children.push(new Node(7));
  });

  it('should perform pre-order traversal correctly', () => {
    expect(tree.preOrder()).toEqual([1, 2, 4, 5, 3, 6, 7]);
  });

  it('should perform post-order traversal correctly', () => {
    expect(tree.postOrder()).toEqual([4, 5, 2, 6, 7, 3, 1]);
  });

  it('should return the maximum value in the tree', () => {
    expect(tree.findMaxValue()).toEqual(7);
  });
});

describe('Breadth-first Traversal', () => {
  it('should return an empty array for an empty tree', () => {
    const tree = new Tree();
    expect(breadthFirst(tree)).toEqual([]);
  });

  it('should return an array with a single element for a tree with a single node', () => {
    const tree = new Tree(new Node(1));
    expect(breadthFirst(tree)).toEqual([1]);
  });

  it('should return an array with the values of the nodes in the correct order for a larger tree', () => {
    const tree = new Tree(new Node(1));
    tree.root.children.push(new Node(2));
    tree.root.children.push(new Node(3));
    tree.root.children[0].children.push(new Node(4));
    tree.root.children[0].children.push(new Node(5));
    tree.root.children[1].children.push(new Node(6));
    tree.root.children[1].children.push(new Node(7));
    expect(breadthFirst(tree)).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
});
