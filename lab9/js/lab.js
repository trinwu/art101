/*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.

   Author: Trinity Wu
   Date: November 5, 2024
*/

// Add the "Make Special" button to each section with the "special-section" class
$(".minor-section").append("<button class='make-special'>Make Special</button>");

// Add a click event listener to all buttons with the "make-special" class
$(".minor-section .make-special").click(function() {
    // Toggle the "special" class on the parent of the button clicked
    $(this).parent().toggleClass("special");
});
