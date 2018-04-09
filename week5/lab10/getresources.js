$(document).ready(function() {
//Running when the page is loaded

    $('#retrieve-resources').click(function( {

      var displayResources = $('#display-resources');
      //Setting up the page component to write to
      displayResources.text('Loading data from JSON source...');
      //Giving it an initial value

      $.ajax({
        type: "GET",
        //The type of AJAX request - a simple GET
        url: "resources.json",
        //A URL which is the source of the JSON file
        success: function(result) {
            //Data will be dealt with here

            var output = "<table><thead><tr><th>Name</th><th>Provider</th><th>URL</th></thead><tbody>";
            //Creating a String with HTML representing table headers

            for (var i in result) {
              output += "<tr><td>" + result[i].name + "</td><td>" + result[i].provider + "</td><td>" + result[i].url + "</td></tr>";
              //Asking each result's JSON for the name, provider and url
              //Surrounding each of these in <td> tags to continue formatting
            } //Running through each JSON result
            output += "</tbody></table>";
            //Closing the table tags

            displayResources.html(output);
            //Telling the displayResources to have the output String as its content
            $("table").addClass("table");
            //Adding the table class to the table for styling

        } //Success function where the code will go when the file is successfully loaded
      })

    }));
    //Adding a handler for the click event for a retrieve-resources button

})
