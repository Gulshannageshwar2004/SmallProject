//01 //agar sum function ke bahar call kare toh error aaygi

// let sum = 54; // Global Scop

// function calSum(a, b){
//     let sum = a+b; //Function Scop (ye jyada spacific hoti hai than Global Scope)
//     console.log(sum);
// }
// //console.log(sum);// accessible nahi hai
// calSum(1,2);
// console.log(sum);



// 02//Block Scop

// let age = 25;
// if(age >= 18) {
//     let str = "adult";
//     console.log(str);
// }

// //03// Lexical Scop
// function outerFunc() {
//     let x = 5; 
//     let y = 6;
//     function innerFunc(){
//         console.log(x);
//     }

//     innerFunc();
// }