
function addContent () {
		
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

function addNewContent(form) {
	var newInput = newInput.value;
	//Storing the value from the newInput field
	var newElement = document.createElement("li");
	//Creating a new list item element
	newElement.appendChild(document.createTextNode(newInput));
	//Creating a new text node using the value from the input field and adding it to the list item element
	var list = document.getElementsByTagName("ul")[0];
	//Getting the first (and only) unordered list element
	list.appendChild(newElement);
	//Adding the new element to the end of the list
}
