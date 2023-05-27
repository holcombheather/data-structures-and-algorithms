# Documentation: 401 Code Challenge - Class 10

# Challenge Title
New Implementation: Stacks and Queues

## Whiteboard Process
![whiteboard](401-challenges/assets/whiteboard-10.png)

## Approach & Efficiency
- Create a Node class that has properties for the value stored in the Node, and a pointer to the next node.
- Create a Stack class that has a top property. It creates an empty Stack when instantiated.
  - This object should be aware of a default empty value assigned to top when the stack is created.
  - The class should contain the following methods:
    - push
    - pop
    - peek
    - is empty
- Create a Queue class that has a front property. It creates an empty Queue when instantiated.
  - This object should be aware of a default empty value assigned to front when the queue is created.
    - The class should contain the following methods:
      - enqueue
      - dequeue
      - peek
      - is empty

**Big 0**
- Time -> O(n)
- Space -> O(1)

## Solution

see [index.js](401-challenges/class-10/index.js)

## Tests
 PASS  ./queue.test.js
  Queue
    ✓ Can successfully enqueue into a queue (1 ms)
    ✓ Can successfully enqueue multiple values into a queue
    ✓ Can successfully dequeue out of a queue the expected value
    ✓ Can successfully peek into a queue, seeing the expected value
    ✓ Can successfully empty a queue after multiple dequeues (1 ms)
    ✓ Can successfully instantiate an empty queue
    ✓ Calling dequeue on empty queue raises exception (7 ms)
    ✓ Calling peek on empty queue raises exception

 PASS  ./stack.test.js
  Stack
    ✓ Can successfully push onto a stack (1 ms)
    ✓ Can successfully push multiple values onto a stack
    ✓ Can successfully pop off the stack
    ✓ Can successfully empty a stack after multiple pops
    ✓ Can successfully peek the next item on the stack (1 ms)
    ✓ Can successfully instantiate an empty stack
    ✓ Calling pop on empty stack raises exception (7 ms)

## References & Collaborations

- Referenced lecture demo with Instructor Ryan Gallaway
- Referenced this article for more information on queues [Creating Queues Using JavaScript](https://www.codecademy.com/article/deyemiobaa/creating-queues-using-javascript)
