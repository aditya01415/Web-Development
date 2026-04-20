const classInfo = {
    akash:{
        grade: 9.5,
        section: 'A',
        rollNo: 1
    },
    ajit:{
        grade: 9,
        section: 'B',
        rollNo: 2
    },
    aniket:{
        grade: 8,
        section: 'C',
        rollNo: 3
    },
    anshul:{
        grade: 7,
        section: 'D',
        rollNo: 4
    }
};

console.log(classInfo);
console.log(classInfo.akash);
console.log(classInfo.ajit);
console.log(classInfo.aniket);
console.log(classInfo.anshul);

// to access the properties of nested objects
console.log(classInfo.akash.grade);
console.log(classInfo.ajit.section);
console.log(classInfo.aniket.rollNo);
console.log(classInfo.anshul.grade);

// to change the value of key in nested object
classInfo.akash.grade = 9.8;
classInfo.ajit.section = 'A';
classInfo.aniket.rollNo = 1;
classInfo.anshul.grade = 8.5;

console.log(classInfo);

// to add new key value pair in nested object
classInfo.akash.year = 2024;
classInfo.ajit.year = 2024;
classInfo.aniket.year = 2024;
classInfo.anshul.year = 2024;

console.log(classInfo);

// to delete key value pair from nested object
delete classInfo.akash.section;
delete classInfo.ajit.section;
delete classInfo.aniket.section;
delete classInfo.anshul.section;

console.log(classInfo);