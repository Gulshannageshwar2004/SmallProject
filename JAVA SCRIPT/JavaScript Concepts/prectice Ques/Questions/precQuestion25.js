// // ----Question 01---//
// let nums = [10, 20, 30, 40, 50, 60];

// let ans = nums.every((el => el % 10 == 0));

// console.log(ans);

// // ----Question 02---//


function getMin(nums) {

    let ans = nums.reduce((min, el) => {
        if(el > min) {
            return min;
        } else {
            return  el;
        }
    });
    return ans;
}
let nums = [1,2,3,7,8];