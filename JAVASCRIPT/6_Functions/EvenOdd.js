function oddOrEvenFactory(request){
    if(request == "odd"){
        let odd = function(n){
            console.log(!(n%2 == 0));
        }
        return odd;
    }
    else if(request == "even"){
        let even = function(n){
            console.log(n%2 == 0);
        }
        return even;
    }
    else{
        console.log("Invalid request. Please enter 'odd' or 'even'.");
    }
}

let request = "odd";
let oddFunc = oddOrEvenFactory(request);
oddFunc(5); // true
oddFunc(10); // false

request = "even";
let evenFunc = oddOrEvenFactory(request);
evenFunc(5); // false
evenFunc(10); // true