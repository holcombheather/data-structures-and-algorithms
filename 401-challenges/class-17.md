# Documentation: 401 Code Challenge - Class 17

# Challenge Title
Breadth-first Traversal.

## Whiteboard Process

![whiteboard](/401-challenges/assets/whiteboard-17.png)

## Approach & Efficiency
- Write a function called breadth first
- Arguments: tree
- Return: list of all values in the tree, in the order they were encountered
- NOTE: Traverse the input tree using a Breadth-first approach

**Big 0**
- Time -> O(n)
- Space -> O(h)

## Solution

see [index.js](401-challenges/class-17/index.js)

## Tests

 PASS  __tests__/trees.test.js
  Tree
    ✓ should perform pre-order traversal correctly (1 ms)
    ✓ should perform post-order traversal correctly
    ✓ should return the maximum value in the tree
  Breadth-first Traversal
    ✓ should return an empty array for an empty tree
    ✓ should return an array with a single element for a tree with a single node
    ✓ should return an array with the values of the nodes in the correct order for a larger tree


## References & Collaborations

- Partnered with Eva Grace Smith.
- Referenced lecture demo and whiteboarding from the DSA portion of Class 15 with Instructor Ryan Gallaway
- Used AI to help write tests.
