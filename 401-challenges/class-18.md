# Documentation: 401 Code Challenge - Class 18

# Challenge Title
Tree "FizzBuzz"

## Whiteboard Process

![whiteboard](/401-challenges/assets/whiteboard-18.png)

## Approach & Efficiency
- Conduct “FizzBuzz” on a k-ary tree while traversing through it to create a new tree.

- Set the values of each of the new nodes depending on the corresponding node value in the source tree.

**Big 0**
- Time -> O(n)
- Space -> O(h)

## Solution

see [index.js](401-challenges/class-18/index.js)

## Tests

  PASS  __tests__/fizzbuzz.test.js
    fizzBuzzTree
      ✓ returns an empty tree when the input tree is empty (1 ms)
      ✓ replaces values divisible by 3 with "Fizz"
      ✓ replaces values divisible by 5 with "Buzz" (1 ms)
      ✓ replaces values divisible by 3 and 5 with "FizzBuzz"
      ✓ keeps the same structure as the input tree


## References & Collaborations

- Referenced lecture demo and whiteboarding from the DSA portion of Class 15 with Instructor Ryan Gallaway
- Used AI to help write tests.
