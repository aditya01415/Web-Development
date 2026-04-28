function add(a, b){
    return a + b;
}

let sum = add(5, 10);
console.log(sum);

//sum  of three numbers
console.log(add(5, add(10, 15))); // it will print 30 because add(10, 15) will return 25 and then add(5, 25) will return 30.