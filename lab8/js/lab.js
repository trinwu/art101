// index.js - anon functions and callbacks 
// Author: Trinity Wu <trawu@ucsc.edu>
// Date: October 31, 2024

// sqaure - takes an input and returns its square
function square(x){
    var results = x*x;
    return results;
}

// testing square()
console.log("What is the square of 3? ", square(3));
console.log("What is the square of 10? ", square(10));
console.log("What is the square of 11? ", square(11));

// arr - an array of numbers from 1-10
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("My array: ", arr);

// mapResults - results of map function
var mapResults = arr.map(square);
console.log("Results of squared array: ", mapResults);

// callback that determines if numbers in array nums are odd or not
mapResults = arr.map(function(x){
    var results = (x%2 != 0);
    return results;
})

// testing oddness
console.log("Results of oddness array: ", mapResults);
