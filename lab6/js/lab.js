// index.js - arrays and objects
// Author: Trinity Wu <trawu@ucsc.edu>
// Date: October 24, 2024

// Define variables
const myTransport = ["car", "bus", "bike"];

// Object for my main ride
var myMainRide = {
  make: "Lexus",
  model: "RX",
  color: "Cloudburst Gray",
  year: 2022,

  // a method
  age: function(){
    return 2024 - this.year;
  }
}

// Output
document.writeln("Kinds of transportation I use: ", myTransport, "</br>");

document.writeln("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
