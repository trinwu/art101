/*
   lab.js 

   Author: Trinity Wu
   Date: December 2, 2024
*/

// Using the core $.ajax() method
$.ajax({
    // The URL for the request (from the API docs)
    url: "https://xkcd.com/info.0.json",
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType: "json",
    // What to do when the API call is successful
    success: function (comicObj) {
        // Create and add title to the section
        const title = $("<h2>").text(comicObj.title);
        $("#output").append(title);

        // Create and add the image with alt and title attributes
        const comicImage = $("<img>")
            .attr("src", comicObj.img)
            .attr("alt", comicObj.alt)
            .attr("title", comicObj.alt);
        $("#output").append(comicImage);
    },
    // What to do if the API call fails
    error: function (jqXHR, textStatus, errorThrown) {
        console.log("Error:", textStatus, errorThrown);
        $("#output").text("Failed to load comic. Please try again later.");
    }
});
