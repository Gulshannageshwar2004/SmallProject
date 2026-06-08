
// //Question 01
// let nums = [10, 20, 30, 40];


// const arrayAverage = (arr) => {
//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }

//     return sum / arr.length;
// };

// let avg = arrayAverage(nums);
// console.log("avarage is:", avg);


// //Question 02
// let n = 10;

// const isEven = (num) => {
//     return num % 2 == 0;
// };

// //test
// let result = isEven(n);
// console.log("Is Even:", result);


//  //Question 03

// const object = {
//     message: 'Hello, world!',

//     logMessage ()  {
//         console.log(this.message);
//     }
// };

// setTimeout(object.logMessage.bind(object),1000);



// // Question 04

// let length = 4;

// function callback () {
//     console.log(this.length);
// }

// const object = {
//     length: 5,
//     method(callback) {
//         callback();
//     },
// };

// object.method(callback, 1, 2);