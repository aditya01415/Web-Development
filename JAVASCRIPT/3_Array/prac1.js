// Array

let student = ["Ajit", "Rahul", "Suresh", "Ramesh"];
console.log(student);
console.log(student[0]);
console.log(student[1]);
console.log(student[2]);
console.log(student[3]);

student[0] = "Ajit Kumar";
console.log(student);

student.push("Sanjay");
console.log(student);

student.pop();
console.log(student);

student.unshift("Vijay");
console.log(student);

student.shift();
console.log(student);

console.log(student.length);