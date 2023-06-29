# Documentation: 401 Code Challenge - Class 30

## Hashtable Implementation

***

## Whiteboard Process

- N/A

## Approach & Efficiency

Implement a Hashtable Class with the following methods:

- **set**
  - Arguments: `key`, `value`
  - Returns: nothing
  - Description: This method should hash the key, and set the key and value pair in the table, handling collisions as needed. If a given key already exists, it should replace its value from the value argument given to this method.

- **get**
  - Arguments: `key`
  - Returns: Value associated with that key in the table

- **has**
  - Arguments: `key`
  - Returns: Boolean, indicating if the key exists in the table already.

- **keys**
  - Returns: Collection of keys

- **hash**
  - Arguments: `key`
  - Returns: Index in the collection for that key


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

  Hashtable
    ✓ Can successfully set a key-value pair in the hashtable (1 ms)
    ✓ Can successfully get the value associated with a given key
    ✓ Can successfully check if a key exists in the hashtable
    ✓ Can successfully return a list of all unique keys in the hashtable
    ✓ Can successfully handle a collision within the hashtable
    ✓ Can successfully retrieve a value from a bucket within the hashtable that has a collision
    ✓ Can successfully hash a key to an in-range value

*Note: replace the above with the actual test results from your code.*

## References & Collaborations

- Used OpenAI's GPT-3 model to assist with BigO and test case development.
