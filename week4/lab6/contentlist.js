
function() {

	function addContent () {
		// add a list of items to the content div
		var items = ["hewey", "dewey", "louie"];

		// build the html string for a <ul> list
		var items_html = "<ul>";
		for (var i=0; i < items.length; i++) {
			item = items[i];
			items_html += "<li>" + item + "</li>";
		};
		items_html += "</ul>";

		// using javascript
		// 1. find the content div
		// 2. modify its html attribute by adding items_html

		var contentDiv = document.getElementById("content");
		//Finding the content div
		contentDiv.innerHTML = items_html;
		//Modifying its inner HTML, adding the items_html variable

	}

	function addContentElements() {
		var items = ["Hewey", "Dewey", "Louie"];
		//Creating an array to store the items

		var list = document.createElement("ul");
		//Creating the unordered list element
		for (var i = 0; i < items.length; i++) {
			var newContent = document.createElement("li");
			//Creating a new list item element
			newContent.appendChild(document.createTextNode(items[i]));
			//Creating a new text node using the current item in the array and adding it to the list item element
		}
		//Iterating through the whole array
		var contentDiv = document.getElementById("content");
		//Finding the content div
		contentDiv.appendChild(list);
		//Adding the list
	}

}
