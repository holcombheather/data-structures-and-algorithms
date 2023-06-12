function binarySearch(arr, key) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === key) {
      return mid;
    } else if (arr[mid] < key) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}

// console.log(binarySearch([4, 8, 15, 16, 23, 42], 15));  // Output: 2
// console.log(binarySearch([-131, -82, 0, 27, 42, 68, 179], 42));  // Output: 4
// console.log(binarySearch([11, 22, 33, 44, 55, 66, 77], 90));  // Output: -1
// console.log(binarySearch([1, 2, 3, 5, 6, 7], 4));  // Output: -1

module.exports = { binarySearch };
