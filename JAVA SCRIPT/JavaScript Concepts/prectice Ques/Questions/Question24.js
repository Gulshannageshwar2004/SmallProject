// //Quesion 01

// const square = (n) => n * n;

// console.log(square(4));

//Question 02

let id = setInterval(() => {
    console.log("hello world");
}, 2000);

setTimeout(() => {
    clearInterval(id);
    console.log("clear interval ran");
}, 10000);
