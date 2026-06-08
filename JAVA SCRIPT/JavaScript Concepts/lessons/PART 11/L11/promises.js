
// //callBack Hell: aise confusing ko hatane ke liyee ham promises ka use karte hai

// function savetoDb(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//         success();
//         // console.log("you data was saved", data);
//     } else {
//         failure();
//         // console.log("week connection. data not Saved");
//     }

// }

// savetoDb(
//     "gulshan study",
//     () => {
//         console.log(" success: your data was saved : ", data);
//         savetoDb(
//             "hello world",
//             () => {
//                 console.log("success2: data2 saved");
//                 savetoDb(
//                     "gulshan", ()=>{
//                     console.log("success3: data3 saved");
//                     },
//                     () => {
//                         console.log("failure3: weak connection");
//                     }
//                 );
//             },
//             () => {
//                 console.log("failure2 : weak connection");
//             }
//         );
//     },
//     () => {
//         console.log("failure: week connection. data not saved:");
//     }
// );

// 01//******// Promises : helped for simplify code

// function savetoDb(data) {
//     return new Promise((resolve, reject) => {

//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         if (internetSpeed > 4) {
//             resolve("success : data was saved");
            
//         } else {
//             reject("failure : week connection");
//         }
//     });
// }

// let request = savetoDb("gulshan kumar");
// request.then(() => {
//     console.log("promise was resolved");
//     console.log(request);
// })
// .catch(() => {
//     console.log("promise was rejected");
    
// })
// console.log(request);
//** *// best code 
// 

// 02//***Promise chain methods: improve meethods // */
// savetoDb("apna gulshan kumar")
//     .then(() => {
//         console.log("data1 saved.");
//         return savetoDb("helloworld");
        
//     })
//     .then(() => {
//             console.log("data2  saved");
//             return savetoDb("gulshan");
//     })

//     .then(() => {
//         console.log("data3 saved");
        
//     })
//     .catch(() => {
//         console.log("promise was rejected");
        
//     });


// 03//*Promises are rejected and
// // resolved with som data (valid result or not*// /

// savetoDb("apna gulshan kumar")
//     .then((result) => {
//         console.log("data1 saved.");
//         console.log("result of promise:", result);
//         return savetoDb("helloworld");
        
//     })
//     .then((result) => {
//             console.log("data2  saved");
//             console.log("result of promise:",result);
//             return savetoDb("gulshan");
//     })

//     .then((result) => {
//         console.log("data3 saved");
//         console.log("result of promise:", result);
        
//     })
//     .catch((error) => {
//         console.log("promise was rejected");
//         console.log("error of promise:",error);
        
//     });
