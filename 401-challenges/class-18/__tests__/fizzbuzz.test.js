const { Node, Tree, fizzBuzzTree } = require('../index.js');

describe('fizzBuzzTree', () => {
  it('returns an empty tree when the input tree is empty', () => {
    const tree = new Tree();
    const newTree = fizzBuzzTree(tree);
    expect(newTree).toEqual(new Tree());
  });

  it('replaces values divisible by 3 with "Fizz"', () => {
    const tree = new Tree(new Node(3, [new Node(9), new Node(4)]));
    const newTree = fizzBuzzTree(tree);
    expect(newTree.root.value).toEqual('Fizz');
    expect(newTree.root.children[0].value).toEqual('Fizz');
    expect(newTree.root.children[1].value).toEqual('4');
  });

  it('replaces values divisible by 5 with "Buzz"', () => {
    const tree = new Tree(new Node(5, [new Node(10), new Node(7)]));
    const newTree = fizzBuzzTree(tree);
    expect(newTree.root.value).toEqual('Buzz');
    expect(newTree.root.children[0].value).toEqual('Buzz');
    expect(newTree.root.children[1].value).toEqual('7');
  });

  it('replaces values divisible by 3 and 5 with "FizzBuzz"', () => {
    const tree = new Tree(new Node(15, [new Node(30), new Node(8)]));
    const newTree = fizzBuzzTree(tree);
    expect(newTree.root.value).toEqual('FizzBuzz');
    expect(newTree.root.children[0].value).toEqual('FizzBuzz');
    expect(newTree.root.children[1].value).toEqual('8');
  });

  it('keeps the same structure as the input tree', () => {
    const tree = new Tree(new Node(1, [new Node(2), new Node(3, [new Node(4), new Node(5)])]));
    const newTree = fizzBuzzTree(tree);
    expect(newTree.root.children.length).toEqual(2);
    expect(newTree.root.children[1].children.length).toEqual(2);
  });
});
