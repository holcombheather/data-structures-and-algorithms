# Documentation: 401 Code Challenge - Class 04

# Challenge Title
Interview 01: Given a matrix, find the sum of each row

## Whiteboard Process

![Whiteboard Screenshot](/401-challenges/assets/whiteboard-04.png)

## Approach & Efficiency
Looped through each row of the matrix and created a new array with the sum of each row in the matrix.

Big 0
- Time -> O(n)
- Space -> O(1)


## Solution
```
function sumRows(matrix) {
  let totals = [];

  for (let i = 0; i < matrix.length; i++) {
    let rowSum = 0;

    for (let j = 0; j < matrix[i].length; j++) {
      rowSum += matrix[i][j] || 0;
      }

    totals.push(rowSum);
  }

  return totals;
}
```
