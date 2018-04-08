$(function(){
	// usual main starting point when web page loads

	// simple CSS class switcher
	// find all divs
	// bind to click events
	// alter the CSS of the specific clicked div element
	$("div").click(function(){
		// $(this) is a shortcut for the element we just selected
		// using $("div")
		if ($(this).hasClass("red")) {
			$(this).toggleClass("blue red");
			//Simplifying the if/else statement with a toggleClass method
		}
		else if ($(this).hasClass("blue")) {
			$(this).toggleClass("green blue");
			//Simplifying the if/else statement with a toggleClass method
		}
		else if ($(this).hasClass("green")) {
			$(this).toggleClass("red green");
			//Simplifying the if/else statement with a toggleClass method
		}
	});

});
