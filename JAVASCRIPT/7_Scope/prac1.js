let greet = "hello"; // global scope

function chnageGreet(){
    let greet = "namaste"; // function scope
    console.log(greet);
    function ineerGreet(){
        console.log(greet); // lexical scope
    }
}

console.log(greet);
chnageGreet();