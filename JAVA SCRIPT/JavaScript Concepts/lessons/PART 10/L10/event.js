// // //form event

// // let form = document.querySelector("form");

// // // form.addEventListener("submit", function (){
// // //     event.preventDefault(); //other page me na khule
// // //     alert("form submitted");
// // // });


// // //extracting form data
// // form.addEventListener("submit", function (event){
// //     event.preventDefault(); //other page me na khule
// //     console.dir(form);
    
// //     // let user = document.querySelector("#user");
// //     // let pass = document.querySelector("#pass");
    
// //     let user = this.elements[0];
// //     let pass = this.elements[1];
// //     // console.log(user.value);
// //     // console.log(pass.value);

// //     // alert(`Hi ${user.value}, your password is set to ${pass.value}`);
// // });



// //01// Change jaise hi ham type karke bahar aayenge just print ho jayegi:change Event
// let form = document.querySelector("form");

// form.addEventListener("submit", function (event){
//     event.preventDefault(); //other page me na khule
// });

// //change Event
// // let user = document.querySelector("#user");

// // user.addEventListener("change", function() {
// //     console.log("input changed");
// //     console.log("final value =", this.value);
// // });

// //input Event
// let user = document.querySelector("#user");

// user.addEventListener("change", function() {
//     console.log("change Event");
//     console.log("final value =", this.value);
// });

// user.addEventListener("change", function() {
//     console.log("input Event");
//     console.log("final value =", this.value);
// });



///02// 
let inp = document.querySelector("#text");
let p = document.querySelector("p");

inp.addEventListener("input", function(){
    console.log(inp.value);
    p.innerText = inp.value;
});