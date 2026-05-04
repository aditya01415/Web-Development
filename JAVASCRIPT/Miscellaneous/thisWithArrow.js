const student = {
    name: "john",
    marks: 95,
    prop: this, // this will refer to the global object (window in browsers) because it's not inside a function or method

    getName: function() {
        console.log(this);
        return this.name; // this will refer to the student object
    },

    getMarks: () => {
        console.log(this);
        return this.marks; // this will refer to the global object (window in browsers) because arrow functions do not have their own 'this'
    },

    getInfo1: function(){
        setTimeout(() => {
            console.log(this);
        }, 2000);
    }
    ,
    getInfo2:function (){
        setTimeout(function () {
            console.log(this);
        }, 2000);
    },
};

console.log(student.getName()); // Output: "john"
console.log(student.getMarks()); // Output: undefined (because this.marks is undefined in the global context)
student.getInfo1(); // Output: student object (because arrow function inherits 'this' from the enclosing context)
student.getInfo2(); // Output: global object (because regular function has its own 'this' which refers to the global object in this case) 
