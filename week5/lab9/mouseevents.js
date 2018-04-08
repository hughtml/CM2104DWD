// JavaScript Document
function mOver(obj) {
    obj.innerHTML = "Thank You";
    //Changing the text within the button when the mouse hovers over
}

function mOut(obj) {
    obj.innerHTML = "Mouse Over Me";
    //Changing the text within the button when the mouse moves away
}

function mDown(obj) {
    obj.style.backgroundColor = "lightblue";
    obj.innerHTML = "Release Me";
    //When the button is clicked on, or the mouse button is held down on it, the colour is changed
    //The text within the button is also changed
}

function mUp(obj) {
    obj.style.backgroundColor="lightgreen";
    obj.innerHTML="Thank You";
    //When the button is clicked on, or the mouse button is release on it, the colour is changed
    //The text within the button is also changed
}
