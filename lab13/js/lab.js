/*
   lab.js - This simple JavaScript/jQuery script that loops over numbers 1-200 and prints Fizz, Buzz, or Boom.

   Author: Trinity Wu
   Date: November 18, 2024
*/

"use strict";

function fizzBuzzBoom() {
    let oneLongString = ""; // Initialize an empty string to hold the output

    for (let i = 1; i <= 200; i++) {
        let str = ""; // Start with an empty string for each number
        
        if (i % 3 === 0) {
            str += "Fizz";
        }
        if (i % 5 === 0) {
            str += "Buzz";
        }
        if (i % 7 === 0) {
            str += "Boom";
        }
        if (str === "") {
            str = i; // If no condition matched, just show the number
        }

        oneLongString += str + "<br>"; // Append the result with a line break
    }
    
    // Display the final output string in the output div
    $("#output").html(oneLongString);
}

// Call the function to execute it
fizzBuzzBoom();
