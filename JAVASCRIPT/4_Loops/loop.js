// for loop -> forward loop
for (let i=1;i<=5;i++) {
    console.log(i);
}

// for loop -> backward loop
for (let i=5;i>=1;i--) {
    console.log(i);
}

// while loop
let j = 1;
while (j <= 5) {
    console.log(j);
    j++;
}

// do-while loop
let k = 1;
do {
    console.log(k);
    k++;
} while (k <= 5);

// for...of loop
let arr = ["a", "b", "c", "d", "e"];
for (let element of arr) {
    console.log(element);
}

// for...in loop
let obj = { name: "John", age: 30, city: "New York" };
for (let key in obj) {
    console.log(key + ": " + obj[key]);
}