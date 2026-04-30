// function scope
let sum = 0; // sum is a global variable, it is accessible throughout the entire program
function calcSum(a,b){
    let sum  = a + b; // sum is a local variable, it is only accessible within the calcSum function
    return sum;
}

console.log(calcSum(5, 10));
// console.log(sum); // This will throw an error because sum is not defined in this scope

//block scope
if(true){
    let blockVar = "I am a block variable";
    console.log(blockVar); // This will work because blockVar is accessible within this block
}
// console.log(blockVar); // This will throw an error because blockVar is not defined in this scope

//lexical scope
function outerFunction(){
    let outerVar = "I am an outer variable";
    function innerFunction(){ //
        console.log(outerVar); // This will work because innerFunction has access to variables in its outer scope
    }
    innerFunction();
}
outerFunction();
 