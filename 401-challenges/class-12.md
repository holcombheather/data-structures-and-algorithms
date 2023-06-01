# Documentation: 401 Code Challenge - Class 11

# Challenge Title
New Implementation: PseudoQueue

## Whiteboard Process
![whiteboard](401-challenges/assets/whiteboard-11.png)

## Approach & Efficiency
- Create a new class called pseudo queue.
  - Do not use an existing Queue.
  - Instead, this PseudoQueue class will implement our standard queue interface (the two methods listed below),
  - Internally, utilize 2 Stack instances to create and manage the queue
- Methods:
  - enqueue
    - Arguments: value
    - Inserts a value into the PseudoQueue, using a first-in, first-out approach.
  - dequeue
    - Arguments: none
    - Extracts a value from the PseudoQueue, using a first-in, first-out approach.
- NOTE: The Stack instances have only push, pop, and peek methods. You should use your own Stack implementation. Instantiate these Stack objects in your PseudoQueue constructor.

**Big 0**
- Time -> O(n)
- Space -> O(1)

## Solution

see [index.js](401-challenges/class-10/index.js)

## Tests

## References & Collaborations

- Partnered wit Malik Sadiki-Torres
- Referenced lecture demo from Class 10 with Instructor Ryan Gallaway
