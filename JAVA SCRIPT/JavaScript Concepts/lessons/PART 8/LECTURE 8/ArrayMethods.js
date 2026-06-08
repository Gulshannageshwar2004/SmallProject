// 01: forEach();

// let arr = [1, 2, 3, 4, 5];

// // let print = function (el) {
// //     console.log(el);
// // };

// // arr.forEach(print);

// arr.forEach(function(el) {
//     console.log(el);
// });

//------- //02//-------//

// let students = [
//     {
//         name: "gulshan",
//         marks: 95,
//     },
//     {
//         name: "kumar",
//         marks: 94.4,
//     },
//     {
//         name: "Mehra",
//         marks: 96,
//     }
// ];

// let gpa = students.map((el) => {
//     return el.marks / 10;
// });

// arr.forEach((student) => {
//     console.log(student.marks);
// });

// //------Map Method-----//
// let num = [1,2,3,4];

// let double = num.map((el) => {
//     return el * 2; // return el * el;
// });


// //------#Filter#-----//

// let nums = [2, 4,  1, 5, 6, 2, 7, 8, 9];

// // let even = nums.filter( (num) => (num % 2 == 0) );
// let ans = nums.filter((el) => {
//     return el % 2 == 0; //even -> true, odd -> false
// });

// //------#Reduce#-----//

// let nums = [1, 2, 3, 4];
// let finalVal = nums.reduce((res, el) => {
//     console.log(res);
//     return res + el;
// });
// console.log(finalVal);

// //Finding Maximum in an array: Reduce Function
// let arr = [1, 2, 3, 4, 5, 6, 7, 2, 11, 9, 2];

// // let max = -1;

// // for(let i=0; i<arr.length; i++) {
// //     if(max < arr[i]) {
// //         max = arr[i];
// //     }
// // }

// //console.log(max);

// let max = arr.reduce((max, el) => {
//     if (max < el) {
//         return el;

//     } else {
//         return max;
//     }
// });

// console.log(max);