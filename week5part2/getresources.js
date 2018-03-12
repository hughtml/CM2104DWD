$(document).ready(function () {
//Code is ready for when the page is loaded, running when the page starts

  $('#retrieve-resources').click(function () {
  //Function to run when the retrieve-resources button is clicked

    var displayResources = $('#display-resources');
    //Setting up a page component that we'll write into
    displayResources.text('Loading data from JSON source...');
    //Telling the user that loading the JSON will take some time

    $.ajax({
    //Using the JQuery AJAX function to retrieve the JSON file
      type: "GET",
      url: "resources.json",
      success: function(result) {

        var output = "<table><thead><tr><th>Name</th><th>Provider</th><th>URL</th></thead><tbody>";
        //Creating an output String, adding HTML table headers to this

        for (var i in result) {
          output += "<tr><td>" + result[i].name + "</td><td>" + result[i].provider + "</td><td>" + result[i].url + "</td></tr>";
          //For each result, formatting it with table data tags
        }
        //For each result, we ask the JSON for the name, provider and URL of that result

        output += "</tbody></table>";
        //Finalising the output String

        displayResources.html(output);
        //Telling the displayResources element its content should be the output String
        $("table").addClass("table");
        //For styling, adding the table css class to our table

      };
    });

  });

})
