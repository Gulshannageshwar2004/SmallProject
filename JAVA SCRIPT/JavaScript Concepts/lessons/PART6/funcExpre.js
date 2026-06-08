// // function expression
// let name = "gulshan";

// let sum = function(a, b) {
//     return a+b;
// }

// //02/Higher Order Funciotn 
// function multipleGreet(func, count) {
//     for(let i=1; i<=count; i++) {
//         func();
//     }
// }

// let greet = function() {
//     console.log("hello");
// }

// // multipleGreet(greet, 100);
// multipleGreet(function() {console.log("namaste")}, 100);


// //03// Higher Order Function: Return a funciton

// function oddEvenTest(request) {
//     if(request == "odd") {
//         return function(n) {
//             console.log(!(n%2 == 0));
//         }
//     } else if(request == "even") {
//         return function(n) {
//             console.log(n%2 == 0);

//         }
//     } else {
//         console.log("wrong request");
//     }
// }

// let request = "odd";