"use strict";
// let username = "Sushanta";
// let age = 23;
// let first_year_result = 3.00;
// const finalOutput = `My name is ${username}, I'm ${age}, years old and my honours first year result was ${first_year_result.toFixed(2)}`;
// console.log(finalOutput);


// let username;
// console.log(typeof username)

// username = "Sushanta";
// console.log(typeof username)
// username = 12345;

// console.log(typeof username)



// const students = [
//   { name: "A", marks: 85 },
//   { name: "B", marks: 42 },
//   { name: "C", marks: 76 },
//   { name: "D", marks: 59 },
//   { name: "E", marks: 91 }
// ];




// const passedStudents = [];
// let totalMark = 0;
// let topStudent;

// for (let i = 0; i < students.length; i++){
//     if (students[i].marks >= 60){
//         passedStudents.push(students[i].name)
//     }
//     totalMark = students[i].marks + totalMark;
    
// }



// const avgMark = totalMark / students.length;


// console.log("Passed Students:", passedStudents);
// console.log(avgMark);



const employees = [
  { name: "Rahim", salary: 40000, performance: 82 },
  { name: "Karim", salary: 55000, performance: 91 },
  { name: "Selim", salary: 48000, performance: 67 },
  { name: "Jamal", salary: 30000, performance: 74 },
  { name: "Babul", salary: 62000, performance: 95 }
];


const bonousEligibleEmployees = [];
const trainingRequiredEmployees = [];
let highestPerformer = employees[0];
let avgSalary = 0;

for (let i = 0; i < employees.length; i++){
  if(employees[i].performance >=80){
    bonousEligibleEmployees.push(employees[i].name);
  }
  if(employees[i].performance < 70){
    trainingRequiredEmployees.push(employees[i].name);
  }
}


for (let i = 1; i < employees.length; i++){
  if(employees[i].performance > highestPerformer.performance){
    highestPerformer = employees[i].name;
  }
  }

for (let i = 0; i < employees.length; i++){
  avgSalary = employees[i].salary + avgSalary;
}

 
console.log("Bonous Eligible Employees:", bonousEligibleEmployees);
console.log("Training Required Employees:", trainingRequiredEmployees);
console.log("Highest Performer:", highestPerformer)
console.log("Average Salary:", avgSalary/ employees.length);