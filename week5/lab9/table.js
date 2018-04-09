$(function(){
//Function running when the document loads

    var rows = $('tr');
    //Storing all the table rows in an array

    multicolor();
    //Calling the multicolor function

    for (var i = 0; i < rows.length; i++) {

        $(rows[i]).mouseenter($(rows[i]).removeClass("row1 row2").addClass("rowhighlighted"););
        //Adding an event listener for when the row needs to be highlighted
        $(rows[i]).mouseleave($(rows[i]).removeClass("rowhighlighted").addClass);
        //Adding an event listener for when the row needs to be unhighlighted

    } //Iterating through all of the rows in the table

});

function multicolor() {

  for (var i = 0; i < rows.length; i++) {

      //------ ALTERNATING COLOURS ------

      if ((i == 0) || (i % 2 == 0)) {
          $(rows[i]).addClass("row2");
      } else {
          $(rows[i]).addClass("row1");
      }

  } //Iterating through all of the rows in the table

}
