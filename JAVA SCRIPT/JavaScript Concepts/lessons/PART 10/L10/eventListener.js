let btn = document.querySelector("button");
let p = document.querySelector("p");
let h1 = document.querySelector("h1");
// btn.addEventListener("click", function() {
//     console.log(this.innerText);
//     this.style.backgroundColor = "blue";
//});

function changeColor() {
    console.dir(this.innerText);
    this.style.backgroundColor = "blue";
}

btn.addEventListener("click", changeColor);
p.addEventListener("click", changeColor);
h1.addEventListener("click", changeColor);


//Keyboard  event

let inp = document.querySelector("input");

inp.addEventListener("keydown", function (event) {
    console.log("key =", event.key); //ArrowUp, ArrowDown, ArrowLeft, ArrowRight
    console.log("code =", event.code);
    console.log("key was pressed");

});

// inp.addEventListener("keyup", function () {
//     console.log("key was release");
// });