var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var deletebtn = document.getElementsByClassName("delete-item");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
//Create a delete link tag 
	var link = document.createElement("i");
	link.className = 'delete-item secondary-content';
	link.innerHTML = '<i class="fa fa-remove"></i>';
	
	li.appendChild(link);
	link.onclick = removeElement;
	// li.addEventListener("click", removeElement,false);
}

//Event listener to delete each of the already created list items 
	for(var i=0;i < deletebtn.length ;i++){
		deletebtn[i].addEventListener("click", removeParent, false);
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
function toggleListItem(){
	var li = document.querySelector("li");
		li.classList.toggle("done");	
}
//function to delete the already create list items
function removeParent(e){
	e.target.parentNode.remove();
}
//funczion to delete the link element
function removeElement(e){
	e.target.parentElement.parentElement.remove();
}


ul.addEventListener("click", toggleListItem)

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);