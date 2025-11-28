"use strict";
// let username = "Sushanta";
// let age = 23;
// let first_year_result = 3.00;
// const finalOutput = `My name is ${username}, I'm ${age}, years old and my honours first year result was ${first_year_result.toFixed(2)}`;
// console.log(finalOutput);


let username;
console.log(typeof username)

username = "Sushanta";
console.log(typeof username)
username = 12345;

console.log(typeof username)



const students = [
  { name: "A", marks: 85 },
  { name: "B", marks: 42 },
  { name: "C", marks: 76 },
  { name: "D", marks: 59 },
  { name: "E", marks: 91 }
];




const passedStudents = [];
let totalMark = 0;
let topStudent;

for (let i = 0; i < students.length; i++){
    if (students[i].marks >= 60){
        passedStudents.push(students[i].name)
    }
    totalMark = students[i].marks + totalMark;
    
}



const avgMark = totalMark / students.length;


console.log("Passed Students:", passedStudents);
console.log(avgMark);

