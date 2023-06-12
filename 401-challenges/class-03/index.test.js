const binarySearch = require('./index');  // assuming that binarySearch is exported from index.js

describe('Binary Search', () => {
  test('should return the index of the element if it is in the array', () => {
    expect(binarySearch([4, 8, 15, 16, 23, 42], 15)).toBe(2);
    expect(binarySearch([-131, -82, 0, 27, 42, 68, 179], 42)).toBe(4);
  });

  test('should return -1 if the element is not in the array', () => {
    expect(binarySearch([11, 22, 33, 44, 55, 66, 77], 90)).toBe(-1);
    expect(binarySearch([1, 2, 3, 5, 6, 7], 4)).toBe(-1);
  });

  test('should handle edge cases like an empty array or a one-element array', () => {
    expect(binarySearch([], 42)).toBe(-1);
    expect(binarySearch([42], 42)).toBe(0);
    expect(binarySearch([42], 41)).toBe(-1);
  });
});
