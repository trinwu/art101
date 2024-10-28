// index.js - functions
// Author: Trinity Wu <trawu@ucsc.edu>
// Date: October 28, 2024

// Function to sort and return an anagram
// function sortUserName(name) {
//     // Convert to lowercase and remove spaces
//     name = name.replace(/\s+/g, '').toLowerCase();
    
//     // Sort the letters alphabetically
//     const sortedName = name.split('').sort().join('');
    
//     return sortedName;
//   }
  
//   // Function to shuffle the letters randomly to create an anagram
//   function shuffleName(name) {
//     const array = name.split('');
//     for (let i = array.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [array[i], array[j]] = [array[j], array[i]]; // Swap
//     }
//     return array.join('');
//   }
  
//   // Function to capitalize the name properly (Title Case)
//   function capitalizeName(name) {
//     return name
//       .split(' ')
//       .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//       .join(' ');
//   }
  
//   // Main function to display the result inside a styled <div>
//   function displayResult(name) {
//     const sortedName = sortUserName(name);
//     const anagram = shuffleName(sortedName);
//     const capitalizedAnagram = capitalizeName(anagram);
  
//     // Create a <div> with class "name-output"
//     const resultDiv = document.createElement('div');
//     resultDiv.className = 'name-output';
//     resultDiv.innerHTML = `Here's your anagrammed name: ${capitalizedAnagram}`;
  
//     // Append the <div> to the body
//     document.body.appendChild(resultDiv);
//   }
  
//   // Prompt the user for their name (outside the functions)
//   const userName = window.prompt("Hiᵕ̈! Please tell me your name so I can create an anagram!");
  
//   // Call the displayResult function with the user's name
//   displayResult(userName);
  

// sortUserName: a function that takes user input and sorts the letters of their name
function sortUserName(name){
    // ask user for their name
    // var userName = window.prompt("hiᵕ̈ please tell me your name so I can sort it!");

    // make the string lowercase, split it into an array, sort it, and join it back to a string
    return name.toLowerCase().split('').sort().join('');
}

// ask user for their name
var userName = window.prompt("hiᵕ̈ please tell me your name so I can sort it!");

//output
document.writeln("here's your sorted name! hope you like itᵕ̈ : ", sortUserName(userName), "</br>")