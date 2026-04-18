const classInfo = [
    {
        name: 'akash',
        grade: 9.5,
        section: 'A',
        rollNo: 1
    },
    {
        name: 'ajit',
        grade: 9,
        section: 'B',
        rollNo: 2
    },
    {
        name: 'aniket',
        grade: 8,
        section: 'C',
        rollNo: 3
    },
    {
        name: 'anshul',
        grade: 7,
        section: 'D',
        rollNo: 4
    }
];

console.log(classInfo);
console.log(classInfo[0]);
console.log(classInfo[1]);
console.log(classInfo[2]);
console.log(classInfo[3]);

// to access the properties of nested objects
console.log(classInfo[0].grade);
console.log(classInfo[1].section);
console.log(classInfo[2].rollNo);
console.log(classInfo[3].name);

// to update the properties of nested objects
classInfo[0].grade = 9.8;
classInfo[1].section = 'A';
classInfo[2].rollNo = 5;
classInfo[3].name = 'ansh';

console.log(classInfo);

// to add new properties to nested objects
classInfo[0].age = 15;
classInfo[1].age = 16;
classInfo[2].age = 17;
classInfo[3].age = 18;

console.log(classInfo);

// to delete properties from nested objects
delete classInfo[0].age;
delete classInfo[1].age;
delete classInfo[2].age;
delete classInfo[3].age;

console.log(classInfo);