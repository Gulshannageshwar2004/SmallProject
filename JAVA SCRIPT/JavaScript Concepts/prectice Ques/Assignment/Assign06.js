
// //Q. 01//
// let arr = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7];
// let num = 5;

// //element larger than a number num
// function getElements(arr, num) {

//     for(let i=0; i<arr.length; i++) {
//         if(arr[i] > num) {
//             console.log(arr[i]);
//         }
//     }
    
// }
// getElements(arr, num);



// //Q02

// let str = "abcdabcdefgggh";

// //function to het String with all unique elements
// function getUnique(str){
//     let ans = "";
//     for (let i = 0; i < str.length; i++) {
//         let currChar = str[i];

//         if (ans.indexOf(currChar) == -1) {
//             //if current character is not added, then add it in ans.
            
//             //Oterwise it is a  duplicate.
//             ans += currChar;
//         }
//     }
//     return ans;
// }

// console.log(getUnique(str));


// //Q03
// let country = ["Australia", "Germany", "United States of America"];

// let longest = country[0];

// for(let i=1; i<country.length; i++) {
//     if(country[i].length > longest.length) {
//         longest = country[i];
//     }
// }
// console.log(longest);


// //Q04: Write a JavaScript function to count the number of vowels in a Stringargumen

// let str = "gulshankumar";

// function countVowels(str) {
//     let count = 0;

//     for(let i = 0; i<str.length; i++) {
//         if (
//             str.charAt(i) == "a" ||
//             str.charAt(i) == "e" ||
//             str.charAt(i) == "i" ||
//             str.charAt(i) == "o" ||
//             str.charAt(i) == "u"
//         ) {

//             count++;
//         }
//     }
//     return count;

// }

// console.log(countVowels(str));


//Q 05//

// function genrateRandom(start, end) {

//     let diff = end - start + 1; // +1 important
//     let random = Math.floor(Math.random() * diff) + start;

//     return random;
// }

// console.log(genrateRandom(1, 10));