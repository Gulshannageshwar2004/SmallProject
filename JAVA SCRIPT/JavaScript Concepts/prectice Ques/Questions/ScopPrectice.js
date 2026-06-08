//q1

let greet = "hello"; //global scope

function changeGreet() {
    let greet = "namaste"; // function scop
    console.log(greet);
    function innerGreet() {
        console.log(greet); //lexical scop
    }
    innerGreet();
}

console.log(greet);
changeGreet();