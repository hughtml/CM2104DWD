$(function (){
//Function will run when the page is loaded
    alert("Document is ready.");
    //The document is ready

    $('#searchform').submit(function() {
    //Tying a listener to the submit event of the form button
      var searchTerms = $('#searchterms').val();
      //Getting the item in the search term box
      addItemToList(searchTerms);
      //Calling the function with the search terms as the parameter
      return false;
      //Preventing the page from reloading
    });
});

function addItemToList(item) {
  $('#results').append("<li>" + item + "</li>");
  //Adding the "item" to the end of our list
}
