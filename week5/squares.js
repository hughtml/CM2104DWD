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
			$(this).fadeOut();
			$(this).toggleClass("blue");
			$(this).fadeIn();
		}
		else if ($(this).hasClass("blue")) {
			$(this).slideUp("slow", function() {});
			$(this).toggleClass("green");
			$(this).slideDown("slow", function() {});
		}
		else if ($(this).hasClass("green")) {
			$(this).toggleClass("red");
		}
	});

});
