const calculator = {
    num: 3,
    add: function (a, b){
        return a+b;
    },
    sub: function (a,b){
        return a-b;
    },
    mul: function(a, b){
        return a*b;
    }
};

console.log(calculator.add(2,3));
console.log(calculator.sub(2,3));
console.log(calculator.mul(2,3));
console.log(calculator.num);

//other way to write methods
const calculator2 = {
    num: 3,
    add(a, b){
        return a+b;
    },
    sub(a,b){
        return a-b;
    },
    mul(a, b){
        return a*b;
    }
};

console.log(calculator2.add(2,3));
console.log(calculator2.sub(2,3));
console.log(calculator2.mul(2,3));
console.log(calculator2.num);