const student ={
    name: "Ajit Kumar",
    age: 20,
    marks: 96.5,
    city: "Delhi"
};

// to change the value of key in object
student.city = "Noida";
student.marks = "A";
student.marks = [100, 96.5, 98.5];
// to add new key value pair in object
student.gender = "Male";

// to delete key value pair from object
delete student.age;

console.log(student);