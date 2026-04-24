function printName(name){
    console.log(name);
}

printName("Ajit Kumar");

function printInfo(name, age){
    console.log(name +"'s age is "+age);
}
printInfo("Ajit Kumar", 22);
printInfo("Rahul"); // it will print "Rahul's age is undefined" because we have not passed the second argument.


function sum(a, b){
    return a + b;
}

let result = sum(5, 10);
console.log(result);