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

type Student = {
  name: string;
  age: number;
  subject: string;
  grade?: number;
  isRegular: boolean;
};

const student1: Student = {
  name: "Rohim",
  age: 34,
  grade: 3.5,
  subject: "Social Work",
  isRegular: true,
};



const arr: Student[] = [{ 
    name: "Rohim",
     age: 23,
     subject: "Bangla",
     isRegular: false
    }
];

console.log(arr);