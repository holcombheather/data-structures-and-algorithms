# Documentation: 401 Code Challenge - Class 07

# Challenge Title
Extending an Implementation: k-th value from the end of a linked list:

## Whiteboard Process
![whiteboard](401-challenges/assets/whiteboard-07.png)

## Approach & Efficiency
- Create a Node class
- Create a Linked List class
- Within your Linked List class, include a head property.
  - Upon instantiation, an empty Linked List should be created.

The class should contain the following methods:
- kth from end
    - argument: a number, k, as a parameter.
    - Return the node’s value that is k places from the tail of the linked list.
    - You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.

**Big 0**
- Time -> O(n)
- Space -> O(1)

## Solution

see [index.js](401-challenges/class-06/linked-list-insertions/index.js)

## Tests

 PASS  __tests__/linked-lists-insertions.test.js
  Linked List
    ✓ Can successfully instantiate an empty linked list (1 ms)
    ✓ Can properly insert into the linked list
    ✓ The head property will properly point to the first node in the linked list (1 ms)
    ✓ Can properly insert multiple nodes into the linked list
    ✓ Will return true when finding a value within the linked list that exists
    ✓ Will return false when searching for a value in the linked list that does not exist (1 ms)
    ✓ Can properly return a collection of all the values that exist in the linked list
    ✓ Can successfully add a node to the end of the linked list
    ✓ Can successfully add multiple nodes to the end of a linked list
    ✓ Can successfully insert a node before a node located in the middle of a linked list (1 ms)
    ✓ Can successfully insert a node before the first node of a linked list
    ✓ Can successfully insert after a node in the middle of the linked list
    ✓ Can successfully insert a node after the last node of the linked list
    ✓ Where k is greater than the length of the linked list
    ✓ Where k and the length of the list are the same
    ✓ Where k is not a positive integer (2 ms)
    ✓ Where the linked list is of a size 1
    ✓ "Happy Path" where k is not at the end, but somewhere in the middle of the linked list


## References & Collaborations

- Partnered with Ike Steoger for Whiteboarding exercise & coding
- Referenced this article for more information on linked lists [Two Pointer Technique in a Linked List using Swift](https://www.codecademy.com/article/the-two-pointer-technique-in-a-linked-list-swift)
