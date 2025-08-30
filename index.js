const inputBox=document.getElementById("input-box");

const listcontainer=document.getElementById("list-container");



function addTask() {

if (inputBox.value === '') {

alert("You must write something");

} else {

let li = document.createElement("li");

 li.innerHTML = inputBox.value;

let span = document.createElement("span");

span.innerHTML = "\u00d7";

li.appendChild(span);

 listcontainer.appendChild(li);

storeData()

 }

inputBox.value = "";

 storeData()

}

listcontainer.addEventListener("click", function(e) {

if (e.target.tagName === "LI") {

e.target.classList.toggle("checked");

 storeData()

 } else if (e.target.tagName === "SPAN") {

e.target.parentElement.remove();

storeData()

}

}, false);

inputBox.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

function storeData(){

 localStorage.setItem("data",listcontainer.innerHTML)

}

function showdata(){

 listcontainer.innerHTML=localStorage.getItem("data");

}

showdata();

