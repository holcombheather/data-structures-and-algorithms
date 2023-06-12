# Documentation: 401 Code Challenge - Class 03

# Challenge Title
Binary search in a sorted 1D array

## Whiteboard Process

![whiteboard](/401-challenges/assets/whiteboard-03.png)

## Approach & Efficiency
- Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the value of the search key, or -1 if the element is not in the array.

**Big 0**
- Time -> O(n)
- Space -> O(h)

## Solution

see [index.js](401-challenges/class-03/index.js)


## Tests

 PASS  ./index.test.js
  Binary Search
    ✓ should return the index of the element if it is in the array
    ✓ should return -1 if the element is not in the array
    ✓ should handle edge cases like an empty array or a one-element array

----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------|---------|----------|---------|---------|-------------------
All files |     100 |      100 |     100 |     100 |
 index.js |     100 |      100 |     100 |     100 |
----------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        0.187 s, estimated 1 s

## References & Collaborations

- Referenced lecture demo of Class 03 with Instructor Ryan Gallaway
