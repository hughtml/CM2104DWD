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
			$(this).fadeOut(800);
			$(this).delay(400);
			$(this).fadeIn(800);
			//When this square it clicked, it will change it's colour then fade out and fade in
		}
		else if ($(this).hasClass("blue")) {
			$(this).toggleClass("green blue");
			//Simplifying the if/else statement with a toggleClass method
			$(this).slideUp(800);
			$(this).delay(400);
			$(this).slideDown(800);
			//When this square it clicked, it will change it's colour then slide down and slide up
		}
		else if ($(this).hasClass("green")) {
			$(this).toggleClass("red green");
			//Simplifying the if/else statement with a toggleClass method
			$(this).css("position", "absolute");
			$(this).animate({left: "+=360"}, 1000, function(){});
			//Copying the example from the lab slides
		}
	});

});
