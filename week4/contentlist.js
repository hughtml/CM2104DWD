
function addContent () {
	// add a list of items to the content div
	var items = ["hewey", "dewey", "louie"];

	/* var items_html = "<ul>";
	for (var i=0; i < items.length; i++) {
		item = items[i];
		items_html += "<li>" + item + "</li>";
	};
	items_html += "</ul>"; */

	//var items_html;
	for (var i=0; i < items.length; i++) {
		var newElement = document.createElement("p");
		var itemText = document.createTextNode(items[i]);
		newElement.appendChild(itemText);
		document.body.getElementById("content").appendChild(newElement);
	};
	//items_html += "</ul>";

	// using javascript
	// 1. find the content div
	// 2. modify its html attribute by adding items_html
	//document.getElementById("content").innerHTML = items_html;
}
