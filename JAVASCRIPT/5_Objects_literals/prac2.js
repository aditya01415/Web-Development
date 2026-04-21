const obj = {
    1: "a",
    2: "b",
    null: "c",
    undefined: "d",
    true: "e",
    false: "f"
}

console.log(obj[1]); // This is called dot notation, it convert the number to a string and then access the property.
console.log(obj[2]);
console.log(obj[null]);  // This is called dot notation, it convert the null value to a string and then access the property.
console.log(obj[undefined]);
console.log(obj[true]); // This is called dot notation, it convert the boolean value to a string and then access the property.
console.log(obj[false]);