"use strict";
// const obj : {
//     name: string,
//     age: number,
//     isMarried?: boolean
// } = {
//     name: "Abdul Korim",
//     age: 34,
//     isMarried: true,
// }
// console.log(obj)
// const sum = (name: string, age: number): string => {
//     const result = `The person name is ${name}, and his age is ${age}`;
//     return result;
// }
// console.log(sum("Rohim Uddin", 34))
// type Student = {
//   name: string;
//   age: number;
//   subject: string;
//   grade?: number;
//   isRegular: boolean;
// };
// const student1: Student = {
//   name: "Rohim",
//   age: 34,
//   grade: 3.5,
//   subject: "Social Work",
//   isRegular: true,
// };
// const arr: Student[] = [{
//     name: "Rohim",
//      age: 23,
//      subject: "Bangla",
//      isRegular: false
//     }
// ];
// console.log(arr);
// Assignment 04 Problem solving Typescript
// Problem 01
const getBatteryStatus = (percentage) => {
    // write your code here
    if (percentage >= 0 && percentage <= 20) {
        return "Low";
    }
    else if (percentage >= 21 && percentage <= 50) {
        return "Medium";
    }
    else if (percentage >= 51 && percentage <= 90) {
        return "High";
    }
    else if (percentage >= 91 && percentage <= 100) {
        return "Full";
    }
    else {
        return "Please provide a valid number of percentage. (e.g 0-100)";
    }
};
const formatBookingConfirmation = ({ name, guests, time }) => {
    // write your code here
    return `${name}'s table for ${guests} guests is confirmed at ${time}.`;
};
// Problem 03
const calculateWeeklyTotal = (expenses) => {
    return expenses.length
        ? expenses.reduce((acc, curr) => acc + curr)
        : 0;
};
const getTrafficAction = (light) => {
    // write your code here
    if (light === "red") {
        return "Stop";
    }
    else if (light === "yellow") {
        return "Slow Down";
    }
    else {
        return "Go";
    }
};
const getQuizSummary = (scores) => {
    // write your code here
    const total = scores.length
        ? scores.reduce((acc, curr) => acc + curr)
        : 0;
    const average = scores.length ? total / scores.length : 0;
    return {
        total,
        average,
    };
};
