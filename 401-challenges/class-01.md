# Documentation: 401 Code Challenge - Class 01

# Challenge Title
Reverse Array

## Whiteboard Process

![Whiteboard Screenshot](/401-challenges/assets/whiteboard-01.png)

## Approach & Efficiency
Took swapping the front and end of the array until the entire array was reverse.
Big 0
- Time -> O(n)
- Space -> O(1)


## Solution
```
const reverseArray = (arr) => {
	let front = 0;
	let end = arr.length - 1;

	while(end > front){
		let temp = arr[front];
		arr[front] = arr[end];
		arr[end] = temp;
		front++;
		end--;
	}
}
```
