var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var deleteButton = document.createElement("button");
	deleteButton.appendChild(document.createTextNode("x"));
	deleteButton.classList.add("delete");
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(deleteButton);
	ul.appendChild(li);

	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleSelectedListItem(e) {
	if (e.target && e.target.matches("li")) {
	    event.target.classList.toggle("done");
  	}
  	if (e.target && e.target.matches(".delete")) {
  		e.target.parentElement.remove();
  	}
}



button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", toggleSelectedListItem);


// ul.addEventListener("click",function(event) {
//     event.target.classList.toggle("done");
// });