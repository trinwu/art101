/*
   lab.js 

   Author: Trinity Wu
   Date: December 2, 2024
*/

$.ajax({
    url: "https://api.allorigins.win/raw?url=https://xkcd.com/info.0.json",
    type: "GET",
    dataType: "json",
    success: function(comicObj) {
        // Create a section for the comic
        let outputDiv = $("#output");
        
        // Create a title using comicObj.title
        let comicTitle = $("<h3>").text(comicObj.title);
        
        // Create an image tag using comicObj.img with alt and title attributes
        let comicImage = $("<img>")
            .attr("src", comicObj.img)
            .attr("alt", comicObj.alt)
            .attr("title", comicObj.alt);
        
        // Clear any existing content and append new comic elements
        outputDiv.empty()
            .append(comicTitle)
            .append(comicImage);
    },
    error: function(jqXHR, textStatus, errorThrown) {
        console.log("Error:", textStatus, errorThrown);
        $("#output").text("Sorry, could not retrieve comic.");
    }
});