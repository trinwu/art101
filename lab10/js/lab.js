/*
   lab.js - This JavaScript/jQuery script appends conversation elements to an output div,
   alternating message alignment like a text conversation.

   Author: Trinity Wu
   Date: November 7, 2024
*/

let isLeft = true; // Variable to alternate alignment

// Generate random text for fake dialogue
function generateRandomText() {
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
    const min = 3;
    const max = 100;
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    return text.slice(randStart, randStart + randLen);
}

// Function to append a message to the conversation
function addMessage(content, alignLeft) {
    const alignmentClass = alignLeft ? 'left' : 'right';
    $("#output").append(`<div class="text ${alignmentClass}"><p>${content}</p></div>`);
}

// Click listener for random text
$("#make-convo").click(function() {
    const randomText = generateRandomText();
    addMessage(randomText, isLeft);
    isLeft = !isLeft; // Alternate alignment
});

// Click listener for sending user input
$("#send-message").click(function() {
    const userInput = $("#user-input").val();
    if (userInput.trim()) {
        addMessage(userInput, true); // Always align user input to the left
        $("#user-input").val(""); // Clear input field
    }
});
