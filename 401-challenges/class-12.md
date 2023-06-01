# Documentation: 401 Code Challenge - Class 12

# Challenge Title
First-in, First out Animal Shelter.

## Whiteboard Process
![whiteboard](401-challenges/assets/whiteboard-12.png)

## Approach & Efficiency
- Create a class called AnimalShelter which holds only dogs and cats.
  - The shelter operates using a first-in, first-out approach.
  - Implement the following methods:
    - enqueue
        - Arguments: animal
        - animal can be either a dog or a cat object.
        - It must have a species property that is either "cat" or "dog"
        - It must have a name property that is a string.
    - dequeue
        - Arguments: pref
        - pref can be either "dog" or "cat"
        - Return: either a dog or a cat, based on preference.
        - If pref is not "dog" or "cat" then return null.

**Big 0**
- Time -> O(n)
- Space -> O(1)

## Solution

see [index.js](401-challenges/class-12/index.js)

## Tests

 PASS  __tests__/animal.test.js
  Animal Shelter
    enqueue
      ✓ should enqueue a dog to the shelter (10 ms)
      ✓ should enqueue a cat to the shelter (1 ms)
      ✓ should not enqueue an invalid animal species
    dequeue
      ✓ should dequeue the next available dog (2 ms)
      ✓ should dequeue the next available cat (1 ms)
      ✓ should return null for an empty queue
      ✓ should return null for an invalid preference (1 ms)

## References & Collaborations

- Referenced lecture demo from Class 10 with Instructor Ryan Gallaway
- Referenced video circle back.
- Used AI to help write tests.
