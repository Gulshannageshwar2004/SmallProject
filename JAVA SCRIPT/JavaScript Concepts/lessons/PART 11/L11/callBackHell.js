// //01//**callback Hell */
// h1 = document.querySelector("h1");

// function changeColor(color, delay, nextColorChange) { //three arguments hai
//     setTimeout(() => {
//         h1.style.color = color;
//         if (nextColorChange) nextColorChange();
//     }, delay);
    
// }

// // //callBack nexting => callBackHell
// changeColor("red", 1000, () => {
//     changeColor("orange", 1000, () => { //CallBackHell
//         changeColor("green", 1000, () =>{
//             changeColor("yellow", 1000);
//         } );
//     });
// });

//02//**given code ko solve with the help of
//  promises: asynchronus */
// h1 = document.querySelector("h1");

// function changeColor(color, delay) { //three arguments hai
//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             h1.style.color = color;
//             resolve("color changed");
//         }, delay);
//     })
    
// }

// changeColor("red", 1000)
// .then(() => {
//     console.log("red color was completed");
//     return changeColor("orange", 1000);
// })
// .then(() => {
//     console.log("red color was completed");
//     return changeColor("green", 1000);
// })


// .then(() => {
//     console.log("red color was completed");
//     return changeColor("blue", 1000);
// })
// .then(() => {
//     console.log("orange color was completed");
// });


//**//04 */
// Await Keyword use 
h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            h1.style.color = color;
            console.log(`color changed to ${color}!`);
            resolve("color changed");
        }, delay);
    });
    
}

//agar koi error na aaye jisme doubt hai use try cach me rakhi sakte hai
async function demo() {
    try {
        await changeColor("red", 1000);
        await changeColor("green", 1000);
        await changeColor("yellow", 1000);
        changeColor("blue", 1000);
    } catch (error) {
        console.log("error caught");
    }

    let a = 5;
    console.log(a);
}