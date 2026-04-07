//trim -> removes whitespace from both ends of a string
let str = "    Hello World!   ";
console.log(str.trim()); // "Hello World!"

//toUpperCase and toLowerCase -> converts a string to uppercase or lowercase letters
let str2 = "JavaScript";
console.log(str2.toUpperCase()); // "JAVASCRIPT"
console.log(str2.toLowerCase()); // "javascript"

//substring -> extracts a portion of a string and returns it as a new string
let str3 = "Hello World!";
console.log(str3.substring(0, 5)); // "Hello"
console.log(str3.substring(6)); // "World!"

//split -> splits a string into an array of substrings based on a specified separator
let str4 = "apple,banana,orange";
let fruits = str4.split(",");
console.log(fruits); // ["apple", "banana", "orange"]

//replace -> replaces a specified value with another value in a string
let str5 = "I love JavaScript!";
let newStr = str5.replace("JavaScript", "programming");
console.log(newStr); // "I love programming!"

//includes -> checks if a string contains a specified substring and returns true or false
let str6 = "Hello World!";
console.log(str6.includes("World")); // true
console.log(str6.includes("world")); // false (case-sensitive)

//indexOf -> returns the index of the first occurrence of a specified substring in a string, or -1 if not found
let str7 = "Hello World!";
console.log(str7.indexOf("World")); // 6
console.log(str7.indexOf("world")); // -1 (not found)
console.log(str7.indexOf("o")); // 4 (first occurrence of "o")

//charAt -> returns the character at a specified index in a string
let str8 = "Hello";
console.log(str8.charAt(0)); // "H"
console.log(str8.charAt(4)); // "o"

//length -> returns the length of a string (number of characters)
let str9 = "Hello World!";
console.log(str9.length); // 12

//repeat -> repeats a string a specified number of times and returns the new string
let str11 = "Hello ";
console.log(str11.repeat(3)); // "Hello Hello Hello "

// slice -> extracts a section of a string and returns it as a new string
let str10 = "Hello World!";
console.log(str10.slice(0, 5)); // "Hello"
console.log(str10.slice(2, 5)); // "llo"
console.log(str10.slice(-6)); // "World!"
console.log(str10.slice(3)); // "lo World!"

// chaining -> allows you to call multiple string methods in a single line of code
let msg = "   Hello, JavaScript!   ";
let newMsg = msg.trim().toUpperCase();
console.log(newMsg); // "HELLO, JAVASCRIPT!"