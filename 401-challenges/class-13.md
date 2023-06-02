# Documentation: 401 Code Challenge - Class 13

# Challenge Title
Multi-bracket Validation.

## Whiteboard Process

![whiteboard](/401-challenges/assets/whiteboard-13.png)

## Approach & Efficiency
- Write a function called validate brackets
- Arguments: string
- Return: boolean
  - representing whether or not the brackets in the string are balanced
- There are 3 types of brackets:
  - Round Brackets : ()
  - Square Brackets : []
  - Curly Brackets : {}

**Big 0**
- Time -> O(n)
- Space -> O(1)

## Solution

see [index.js](401-challenges/class-12/index.js)

## Tests

 PASS  __tests__/brackets.test.js
  Bracket Validation
    ✓ should return true for input strings with balanced brackets (1 ms)
    ✓ should return false for input strings with unbalanced brackets
    ✓ should correctly handle input strings with only opening brackets
    ✓ should correctly handle input strings with only closing brackets
    ✓ should correctly handle input strings without any brackets

## References & Collaborations

- Referenced lecture demo from Class 10 with Instructor Ryan Gallaway
- Referenced video circle back.
- Used AI to help write tests.
