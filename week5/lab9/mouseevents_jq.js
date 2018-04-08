// JavaScript Document

$(function(){
	// usual main starting point when web page loads


	// use jquery to find the div with id button1
	// set the mouse enter and mouse leave functions, just like the onclick in the lecture
	// use the html attribute to set the text
	$("#button1").mouseenter(function(){
		$("#button1").html("<p>Thank You</p>");
	});

	// now you need to do the same for button1 for mouseleave
	// and mouseup, mousedown for button2

	$("button1").mouseleave(function() {
		$("button1").html("<p>Mouse Over Me</p>");
		//Editing the inner HTML of the first buttsoon
	});
	//Finding button1

	$("button2").mouseup(function() {
		$("button2").html("<p>Release Me</p>");
		$("button2").css("backgroundColor", "lightblue");
		//Editing the inner HTML and colour of the second buttoon
	});
	//Finding button2

	$("button2").mouseup(function() {
		$("button2").html("<p>Thank You</p>");
		$("button2").css("backgroundColor", "lightgreen");
		//Editing the inner HTML and colour of the second buttoon
	});
	//Finding button2

});
