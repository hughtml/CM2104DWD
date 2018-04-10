$(function (){
//Function will run when the page is loaded
    alert("Document is ready.");
    //The document is ready

    $('#searchform').submit(function() {
    //Tying a listener to the submit event of the form button
      var searchTerms = $('#searchterms').val();
      //Getting the item in the search term box
      getResultsFromOMDb(searchTerms);
      //Calling the function with the search terms as the parameter
      return false;
      //Preventing the page from reloading
    });
});

function getResultsFromOMDb(searchTerms) {
  var url = "http://www.omdbapi.com/?i=tt3896198&apikey=8d5fad5a&s=" + searchTerms;
  //Building the URL for the request
  $.getJSON(url, function(jsondata) {
  //Using the JQuery JSON shortcut
      printJSON(jsondata);
      //Handling the results
  });
}

function printJSON(jsondata) {
  var normal = JSON.stringify(jsondata);
  //Converting the JSON data to a printable String
  $('#resultsbox').append("<p>" + normal + "</p>");
  //Printing the JSON to the screen
}

function addItemToList(item) {
  $('#results').append("<li>" + item + "</li>");
  //Adding the "item" to the end of our list
}
