// // Q1. 

// let arr = [1, 2, 3, 4, 5, 6, 2, 3];
// let num = 2;

// let result = [];

// for(let i=0; i < arr.length; i++) {
//     if(arr[i] !== num) {
//         result.push(arr[i]);
//     }
// }


// // Q2
// let num = 287152;
// let count = num.toString().length;

// console.log(count);

// //  Q3
// let num = 287152;
// let sum = 0;

// while(num > 0) {
//     let digit = num % 10;  //reminder 2 bachta hai 287152 % 10 kare toh
//     sum = sum + digit;  // reminder and sum  add honge
//     num = Math.floor(num / 10); // last digit remove
// }

// console.log("Sum of digits =", sum);


// // Q4
// let n = 7;
// let fact = 1;

// for(let i = 1; i <= n; i++) {
//     fact = fact * i;//fact *=i // ye shortcut hai
// }

// console.log("Factorial =", fact);


// // Q5
// let arr = [10, 25, 7, 99, 56];

// let max = arr[0];

// for(let i = 1; i<= arr.length; i++) {
//     if(arr[i] > max) {
//         max = arr[i];
//     }
// }
// console.log("Largest number =", max);