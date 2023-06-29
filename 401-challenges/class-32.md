# Documentation: 401 Code Challenge - Class 32

## Hashtable Implementation

## Whiteboard Process

![whiteboard](./whiteboard-32.png)

## Approach & Efficiency

This implementation of a hashtable uses chaining for collision handling. When two keys hash to the same index, a linked list is created at that index to store both key-value pairs. The hashtable includes methods for setting a key-value pair, retrieving a value by key, checking if a key exists, returning all keys, and generating a hash for a given key.

**Big O:**

- Time Complexity:
  - Set: O(1) average case, O(n) worst case
  - Get: O(1) average case, O(n) worst case
  - Has: O(1) average case, O(n) worst case
  - Keys: O(n)

- Space Complexity: O(n), where 'n' is the total number of keys stored in the hashtable.

## Solution

See [index.js](401-challenges/class-30/index.js)

## Tests

Test cases include:

- Setting a key-value pair in the hashtable
- Retrieving the value associated with a given key
- Checking if a key exists in the hashtable
- Successfully returning a list of all unique keys in the hashtable
- Handling collisions within the hashtable
- Retrieving a value from a bucket within the hashtable that has a collision
- Generating a hash for a given key that is within range

```
PASS  __tests__/hashtable.test.js
  Hashtable
    ✓ Can successfully set a key-value pair in the hashtable (1 ms)
    ✓ Can successfully get the value associated with a given key
    ✓ Can successfully check if a key exists in the hashtable (1 ms)
    ✓ Can successfully return a list of all unique keys in the hashtable
    ✓ Can successfully handle a collision within the hashtable
    ✓ Can successfully retrieve a value from a bucket within the hashtable that has a collision
    ✓ Can successfully hash a key to an in-range value
```

*Note: replace the above with the actual test results from your code.*

## References & Collaborations

- Used OpenAI's GPT-3 model to assist with BigO and test case development.
