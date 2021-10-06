let list = document.getElementById("list");

function sayHi() {
    console.log("hi");
}

let liHTML = '<li onclick="sayHi()">list item</li>';
list.insertAdjacentHTML("afterbegin", liHTML);

// ----------------------------------------

let liElement = document.createElement("li");
liElement.textContent = "list element";

liElement.addEventListener("click", () => {
  console.log("bla bla");
});

list.appendChild(liElement);