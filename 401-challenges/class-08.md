# Documentation: 401 Code Challenge - Class 08

# Challenge Title
Extending an Implementation: Zip two linked lists

## Whiteboard Process
![whiteboard](/401-challenges/assets/whiteboard-08.png)

## Approach & Efficiency
- Write a function called zip lists
- Arguments: 2 linked lists
- Return: New Linked List, zipped as noted below
- Zip the two linked lists together into one so that the nodes alternate between the two lists and return a reference to the the zipped list.
- Try and keep additional space down to O(1)
- You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.

**Big 0**
- Time -> O(n)
- Space -> O(1)

## Solution

see [index.js](401-challenges/class-06/linked-list-insertions/index.js)

## Tests
 PASS  __tests__/linked-lists-insertions.test.js
  zipList
    ✓ Should zip two lists with different lengths
    ✓ Should zip two lists with different lengths and one empty list
    ✓ Should zip two lists with different lengths and one list ends early
    ✓ Should return an empty list if both input lists are empty
    ✓ Should zip two lists with different lengths and return the remainder of the longer list
    ✓ Should zip two lists with different values


## References & Collaborations

- Referenced 'circle back' lecture demo with Instructor Ryan Gallaway
- Referenced this article for more information on linked lists [Two Pointer Technique in a Linked List using Swift](https://www.codecademy.com/article/the-two-pointer-technique-in-a-linked-list-swift)
- Used AI to generate tests with values it randomly assigned for new function. Used worded tests that I authored on whiteboard as prompt.
