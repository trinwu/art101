// index.js - functions
// Author: Trinity Wu <trawu@ucsc.edu>
// Date: October 28, 2024

// sortUserName: a function that takes user input and sorts the letters of their name
function sortUserName(name){
    // make the string lowercase, split it into an array, sort it, and join it back to a string
    return name.toLowerCase().split('').sort().join('');
}

// shuffleName: a function to shuffle the letters randomly to create an anagram
function shuffleName(name) {
    const array = name.split('');
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap
    }
    return array.join('');
}
  
// captializeName: a function to capitalize the name properly 
function capitalizeName(name) {
    return name
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// ask user for their name
var userName = window.prompt("hiᵕ̈ please tell me your name so I can sort it!");

// shuffle the name to create an anagram
const anagram = shuffleName(userName);

//output
document.writeln("here's your sorted name: ", sortUserName(userName), "</br>")
document.writeln("oh, and this is a new name for you: ", capitalizeName(anagram), "</br>")