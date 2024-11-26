/*
   lab.js 

   Author: Trinity Wu
   Date: November 25, 2024
*/

$(document).ready(function () {
    // Add a click event listener to the "Activate" button
    $('#activate').on('click', function () {
        // Perform an AJAX call to fetch data from the Pokémon API
        $.ajax({
            url: "https://pokeapi.co/api/v2/pokemon/pikachu", // Replace 'pikachu' with any Pokémon name to test
            type: "GET", // The HTTP method for the request
            dataType: "json", // Expected data format from the API
            success: function (data) {
                // Process and display the API response
                console.log(data); // For debugging, logs the response in the console
                
                // Create a formatted output
                let outputHtml = `
                    <h3>${data.name.charAt(0).toUpperCase() + data.name.slice(1)}</h3>
                    <p><strong>Height:</strong> ${data.height}</p>
                    <p><strong>Weight:</strong> ${data.weight}</p>
                    <p><strong>Abilities:</strong></p>
                    <ul>
                        ${data.abilities.map(ability => `<li>${ability.ability.name}</li>`).join('')}
                    </ul>
                `;

                // Add the output to the div#output
                $('#output').html(outputHtml);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                // Handle errors from the API call
                console.error("Error:", textStatus, errorThrown); // Log the error for debugging
                $('#output').html("<p>Failed to fetch Pokémon data. Please try again.</p>");
            }
        });
    });
});
