// Create a close button and append it to each list item
let myNodelist = document.getElementsByTagName("LI");
for (let i = 0; i < myNodelist.length; ++i) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// Click on close button to delete a list item
let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; ++i) {
    close[i].onclick = function() {
        this.parentElement.style.display = "none"
    }
}

// Add a checked symbol when clicking on a list item
let list = document.querySelector("ul")
list.addEventListener("click", (ev) => {
    if (ev.target.tagName === "LI") {
        ev.target.classList.toggle("checked");
    }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
    let li = document.createElement("LI");
    let inputValue = document.getElementById("myInput").value.trim();
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === "") {
        alert("You must write something!");
    }
    else {
        document.getElementById("myUl").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (let i = 0; i < close.length; ++i) {
        close[i].onclick = function() {
            this.parentElement.style.display = "none"
        }
    }
}