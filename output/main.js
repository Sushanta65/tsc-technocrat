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
const getQuizSummary = (scores) => {
    // write your code here
    const total = scores.length ? scores.reduce((acc, curr) => acc + curr) : 0;
    const average = scores.length ? total / scores.length : 0;
    return {
        total,
        average
    };
};
