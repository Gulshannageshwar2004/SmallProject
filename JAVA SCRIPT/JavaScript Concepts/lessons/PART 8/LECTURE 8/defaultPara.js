//Default Parameters

// function sum(a, b=2) {
//     return a+b;
// }


// //Spread 

// // let arr = [1, 2, 3, 4, 5];

// // let newArr = [...arr];
// // console.log(newArr);

// //Add element and merge array

// // let arr1 = [1, 2, 3];
// // let arr2 = [...arr1, 4, 5];

// // console.log(arr2);

// let a = [1, 2];
// let b = [3, 4];

// let c = [...a, ...b];
// console.log(c);

// //with Array Literals
// let chars = [..."gulshan"];
// console.log(chars);


//Object Use

// let data = {
//     email: "gulshan@gmail.com",
//     password: "abcd",
// };

// let dataCopy = { ...data, id: 123};

// console.log("Original Object:", data);
// console.log("Copied Object:", dataCopy);

let data = {
    email: "gulshan@gmail.com",
    password: "abcd",
};

const dataCopy = { ...data, id: 123, county: "india"};

let arr = [1, 2, 3, 4, 5]; //val
let obj1 = { ...arr }; //obj -> key: val

let obj2 = {..."hello"};