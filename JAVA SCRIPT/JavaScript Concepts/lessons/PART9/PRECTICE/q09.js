// original array
let nums = [1, 2, 3, 4];

// step 1: square each element
let squares = nums.map(n => n * n);

// step 2: sum of squared values
let sum = squares.reduce((acc, val) => acc + val, 0);

// step 3: average
let avg = sum / nums.length;

// output
console.log("Squares:", squares);
console.log("Sum:", sum);
console.log("Average:", avg);