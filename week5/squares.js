$(function(){
	// usual main starting point when web page loads

	// simple CSS class switcher
	// find all divs
	// bind to click events
	// alter the CSS of the specific clicked div element
	$("div").click(function(){
		// $(this) is a shortcut for the element we just selected
		// using $("div")
		$(this).css("position", "absolute");
		$(this).animate({left:"+=360"}, 1000, function(){});

		if ($(this).hasClass("red")) {
			$(this).toggleClass("blue");
			//$(this).fadeOut();
			//$(this).fadeIn();
		}
		else if ($(this).hasClass("blue")) {
			$(this).toggleClass("green");
			//$(this).slideUp("slow", function() {});
			//$(this).slideDown("slow", function() {});hughtml
		}
		else if ($(this).hasClass("green")) {
			$(this).toggleClass("red");
		}

	});

});
