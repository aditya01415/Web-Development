// Random integer between 1 and 10
let step1 = Math.random(); // Random number between 0 and 1
let step2 = step1 * 10; // Random number between 0 and 10
let step3 = Math.floor(step2); // Random integer between 0 and 9

step3 = step3 + 1; // Random integer between 1 and 10

//combine steps into one line
let step = Math.floor(Math.random() * 10) + 1; // Random integer between 1 and 10
console.log(step);