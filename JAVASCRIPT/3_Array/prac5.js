let start = ["january", "july", "march", "august"];

//using splice method to remove 2 elements from index 0 and add 2 new elements at index 0
start.splice(0, 2, "july", "june");
console.log(start);

let lang  = [ "c", "c++", "html", "javascript", "python", "java", "c#", "sql"];
console.log(lang.reverse().indexOf("javascript"));