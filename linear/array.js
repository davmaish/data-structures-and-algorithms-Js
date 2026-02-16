// Array Data Structure Implementation

// Creating an array
let numbers = [10, 20, 30, 40];

// Insertion
numbers.push(50);

// Traversing
console.log("Traversing Array:");
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Searching using Linear Search
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

console.log("Index of 30:", linearSearch(numbers, 30));

