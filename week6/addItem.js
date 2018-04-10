$(function (){
//Function will run when the page is loaded
    alert("Document is ready.");
    //The document is ready

    S('#searchform').submit(function() {
    //Tying a listener to the submit event of the form button
      addItemToList("Example Item");
      //Calling the function with a String parameter
      return false;
      //Preventing the page from reloading
    });
});

function addItemToList(item) {
  $('#results').append("<li>" + item + "</li>");
  //Adding the "item" to the end of our list
}
