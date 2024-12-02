/*
   lab.js 

   Author: Trinity Wu
   Date: December 2, 2024
*/

// Global variable to keep track of current comic number and latest comic
let currentComicNum = null;
let latestComicNum = null;

// Function to retrieve and display comic data
function getAndPutData(comicNumber = null) {
    // If no comic number provided, get the latest comic
    const url = comicNumber 
        ? `https://api.allorigins.win/raw?url=https://xkcd.com/${comicNumber}/info.0.json`
        : `https://api.allorigins.win/raw?url=https://xkcd.com/info.0.json`;

    $.ajax({
        url: url,
        type: "GET",
        dataType: "json",
        success: function(comicObj) {
            // Update current and latest comic numbers
            currentComicNum = comicObj.num;
            
            // If latestComicNum is null, set it 
            if (latestComicNum === null) {
                latestComicNum = comicObj.num;
            }

            console.log(`Current Comic: ${currentComicNum}, Latest Comic: ${latestComicNum}`);

            // Create a section for the comic
            let outputDiv = $("#output");
            
            // Clear previous content
            outputDiv.empty();

            // Create a title using comicObj.title
            let comicTitle = $("<h3>")
                .text(`${comicObj.title} (Comic #${comicObj.num})`)
                .addClass("comic-title");
            
            // Create an image tag using comicObj.img with alt and title attributes
            let comicImage = $("<img>")
                .attr("src", comicObj.img)
                .attr("alt", comicObj.alt)
                .attr("title", comicObj.alt)
                .addClass("comic-image");
            
            // Create navigation buttons
            let prevButton = $("<button>")
                .text("Previous Comic")
                .addClass("nav-button")
                .prop("disabled", currentComicNum <= 1)
                .on("click", function() {
                    if (currentComicNum > 1) {
                        getAndPutData(currentComicNum - 1);
                    }
                });
            
            let nextButton = $("<button>")
                .text("Next Comic")
                .addClass("nav-button")
                .prop("disabled", currentComicNum >= latestComicNum)
                .on("click", function() {
                    if (currentComicNum < latestComicNum) {
                        getAndPutData(currentComicNum + 1);
                    }
                });
            
            // Create a navigation div
            let navDiv = $("<div>")
                .addClass("comic-navigation")
                .append(prevButton)
                .append(nextButton);
            
            // Append elements to output div
            outputDiv
                .append(comicTitle)
                .append(comicImage)
                .append(navDiv);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log("Error:", textStatus, errorThrown);
            $("#output").text("Sorry, could not retrieve comic.");
        }
    });
}

// When document is ready, fetch the latest comic
$(document).ready(function() {
    getAndPutData();
});