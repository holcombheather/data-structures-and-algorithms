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




## References & Collaborations

- Partnered with Emmanuel Gonzales for Whiteboarding exercise
- Referenced this article for more information on linked lists [Implementing a Linked List in ES6 JavaScript](https://javascript.plainenglish.io/implementing-a-linked-list-in-es6-javascript-be896ed51d5f)
- Asked ChatGPT for help writing tests. Used prompt ""
