// nested array
let nums = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(nums[0][1]); // 2
console.log(nums[1][2]); // 6
console.log(nums[2][0]); // 7

// nested array with different data types
let mixed = [["apple", "banana", "cherry"], [1, 2, 3], [true, false, true]];
console.log(mixed[0][1]); // "banana"
console.log(mixed[1][0]); // 1
console.log(mixed[2][2]); // true

// nested array with more than 2 levels
let nested = [[[1, 2], [3, 4]], [[5, 6], [7, 8]], [[9, 10], [11, 12]]];
console.log(nested[0][0][1]); // 2
console.log(nested[1][1][0]); // 7
console.log(nested[2][0][1]); // 10