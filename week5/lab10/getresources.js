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
        } //Success function where the code will go when the file is successfully loaded
      })

    }));
    //Adding a handler for the click event for a retrieve-resources button

})
