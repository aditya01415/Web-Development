//Array Methods
let cars = ["BMW", "Audi", "Mercedes", "Tesla"];

// length - returns the number of elements in the array
console.log(cars.length);

// push - adds element at the end
cars.push("Volvo");
console.log(cars);

// pop - deletes element from the end
cars.pop();
console.log(cars);

// unshift - adds element at the beginning
cars.unshift("Volvo");
console.log(cars);

// shift - deletes element from the beginning
cars.shift();
console.log(cars);

//indexOf -> returns the index of the first occurrence of the specified element in the array, or -1 if it is not found.
console.log(cars.indexOf("Audi"));
console.log(cars.indexOf("Volvo"));

//includes -> returns true if the array contains a specified element, otherwise false.
console.log(cars.includes("BMW"));
console.log(cars.includes("Volvo"));

//concat -> used to merge two or more arrays
let moreCars = ["Honda", "Toyota"];
let allCars = cars.concat(moreCars);
console.log(allCars);

//reverse -> reverses the order of the elements in the array and change in original array
console.log(allCars.reverse());

//slice -> returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
let someCars = allCars.slice(2, 5);
console.log(allCars.slice());
console.log(allCars.slice(3));
console.log(allCars.slice(9));
console.log(someCars);
console.log(allCars);

//splice -> changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. It modifies the original array and returns an array containing the deleted elements.
let removedCars = allCars.splice(2, 3, "Ferrari", "Lamborghini");
allCars.splice(5,0, "Porsche");
console.log(allCars);
console.log(removedCars);

//sort -> sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
console.log(allCars.sort());

// array copy
let arr = [1, 2, 3, 4, 5];
let copyArr = arr.slice();
console.log(copyArr);
