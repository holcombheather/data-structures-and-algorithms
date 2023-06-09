# Documentation: 401 Code Challenge - Class 16

# Challenge Title
Find the Maximum Value in a Binary Tree

## Whiteboard Process

![whiteboard](/401-challenges/assets/whiteboard-16.png)

## Approach & Efficiency
- Write the following method for the Binary Tree class:
  - find maximum value
    - Arguments: none
    - Returns: number
- Find the maximum value stored in the tree. You can assume that the values stored in the Binary Tree will be numeric.

**Big 0**
- Time -> O(n)
- Space -> O(1)

## Solution

see [index.js](401-challenges/class-15/index.js)

## Tests

 PASS  __tests__/trees.test.js
  Binary Tree and Binary Search Tree
    ✓ can successfully instantiate an empty tree (1 ms)
    ✓ can successfully instantiate a tree with a single root node
    ✓ can successfully add a left child and right child to a node in a Binary Search Tree (1 ms)
    ✓ can successfully return a collection from a pre-order traversal
    ✓ can successfully return a collection from an in-order traversal (1 ms)
    ✓ can successfully return a collection from a post-order traversal
    ✓ returns true for the contains method, given an existing node value
    ✓ returns false for the contains method, given a non-existing node value
  findMaxValue
    ✓ returns null for an empty tree
    ✓ returns the value of the root node for a tree with one node
    ✓ returns the maximum value for a tree with multiple nodes
    ✓ returns the maximum value for a tree with negative numbers

## References & Collaborations

- Referenced lecture demo and whiteboarding from the DSA portion of Class 15 with Instructor Ryan Gallaway
- Used AI to help write tests.
- Used this reference to find the lowest possible number in javascript as [-infinity](https://www.geeksforgeeks.org/what-is-negative-infinity-in-javascript/)
- Refered to this solution for syntax and use of -Infinity [LeetCode 515. Find Largest Value in Each Tree Row (javascript solution)](https://dev.to/cod3pineapple/leetcode-515-find-largest-value-in-each-tree-row-javascript-solution-hmb)
