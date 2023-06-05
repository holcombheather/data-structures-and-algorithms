# Documentation: 401 Code Challenge - Class 15

# Challenge Title
Implementation: Trees

## Whiteboard Process

![whiteboard](/401-challenges/assets/whiteboard-13.png)

## Approach & Efficiency
- Node
  - Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.
- Binary Tree
  - Create a Binary Tree class
    - Define a method for each of the depth first traversals:
      - pre order
      - in order
      - post order
    - Each depth first traversal method should return an array of values, ordered appropriately.
- Binary Search Tree
  - Create a Binary Search Tree class
    - This class should be a sub-class (or your languages equivalent) of the Binary Tree Class, with the following additional methods:
    - Add
      - Arguments: value
      - Return: nothing
      - Adds a new node with that value in the correct location in the binary search tree.
  - Contains
    - Argument: value
    - Returns: boolean indicating whether or not the value is in the tree at least once.

**Big 0**
- Time -> O(n)
- Space -> O(1)

## Solution

see [index.js](401-challenges/class-15/index.js)

## Tests

 PASS  __tests__/trees.test.js
  Binary Tree and Binary Search Tree
    ✓ can successfully instantiate an empty tree (1 ms)
    ✓ can successfully instantiate a tree with a single root node (2 ms)
    ✓ can successfully add a left child and right child to a node in a Binary Search Tree
    ✓ can successfully return a collection from a pre-order traversal
    ✓ can successfully return a collection from an in-order traversal
    ✓ can successfully return a collection from a post-order traversal
    ✓ returns true for the contains method, given an existing node value
    ✓ returns false for the contains method, given a non-existing node value

## References & Collaborations

- Referenced lecture demo and whiteboarding from the DSA portion of Class 15 with Instructor Ryan Gallaway
- Used AI to help write tests.
