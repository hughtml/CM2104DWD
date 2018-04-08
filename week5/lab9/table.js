$(function(){
//Function running when the document loads

    var rows = $(tr);
    //Storing all the table rows in an array
    for (var i = 0; i < rows.length; i++) {
        if ((i == 0) || (i % 2 == 0)) {
            rows[i].addClass("row2");
        } else {
            rows[i].addClass("row1");
        }
    } //Iterating through all of the rows in the table

});
