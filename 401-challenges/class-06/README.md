# Documentation: 401 Code Challenge - Class 06

# Challenge Title
Extending an Implementation (Linked Lists)

## Whiteboard Process
![whiteboard for class 06](401-challenges/class-06/whiteboard-class06.png)

## Approach & Efficiency
- Create a Node class
- Create a Linked List class
- Within your Linked List class, include a head property.
  - Upon instantiation, an empty Linked List should be created.

The class should contain the following methods:
- append
  - Arguments: value
  - Adds a new node with the given value to the end of the list
- insert before
  - Arguments: value, new value
  - Adds a new node with the given new value immediately before the first node that has the value specified
  - Arguments: value, new value
  - Adds a new node with the given new value immediately after the first node that has the value specified


Big 0
- Time -> O(n)
- Space -> O(1)


## Solution

see [index.js](401-challenges/class-06/linked-list-insertions/index.js)

## Tests

 FAIL  __tests__/linked-lists-insertions.test.js
  Linked List
    ✓ Can successfully add a node to the end of the linked list (1 ms)
    ✓ Can successfully add multiple nodes to the end of a linked list
    ✕ Can successfully insert a node before a node located in the middle of a linked list (1 ms)
    ✕ Can successfully insert a node before the first node of a linked list
    ✓ Can successfully insert after a node in the middle of the linked list
    ✓ Can successfully insert a node after the last node of the linked list (1 ms)


## References & Collaborations

- Partnered with Emmanuel Gonzales for Whiteboarding exercise
- Referenced this article for more information on linked lists [Implementing a Linked List in ES6 JavaScript](https://javascript.plainenglish.io/implementing-a-linked-list-in-es6-javascript-be896ed51d5f)
- Asked ChatGPT for help writing tests. Used prompt "Can you help me write tests for my javascript code to ensure the functionality can prove the following: Can successfully add a node to the end of the linked list and can successfully add multiple nodes to the end of a linked list"
  - Then used the response as a blueprint for the remaining tests as well.
