let marks = [85, 90, 78, 92, 88];

let info = ["Ajit", 25, "Computer Science"];
// empty array
let emptyArray = [];

console.log(marks);
console.log(info);
console.log(emptyArray);

console.log(marks[0]);
console.log(info[0][0]);


// Arrays are mutable, we can change the values
marks[0] = 95;
console.log(marks);

info[1] = 26;
console.log(info);

console.log(marks.length);
console.log(info.length);
console.log(emptyArray.length);

// store element at index 10
marks[10] = 80;
console.log(marks);
