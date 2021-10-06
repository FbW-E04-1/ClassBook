(function() {})()






/**
 * Local Storage
 *
 * The local storage lets us store information inside the browser.
 * This information is stored in the form of a list of key/value pairs.
 *
 * We can only store strings.
 *
 * - localStorage.setItem("theme", "dark"): with this method we store a key called "theme" with
 *  a value of "dark"
 * - localStorage.getItem("theme"): we retrieve the value for the key "theme"
 * - localStorage.removeItem("theme"): we remove an item with key "theme"
 * - localStorage.clear(): we remove all items in the local storage
 *
 * if a certain key is not set yet, getItem() will return null
 *
 */

let form = document.getElementById("form");
let itemInput = document.getElementById("item");
let todoList = document.querySelector(".todo-list");

let todoItems = JSON.parse(localStorage.getItem("todo-list")) || [];

renderTodoList();

form.addEventListener("submit", (event) => {

  event.preventDefault();



  let item = {};
  item.task = itemInput.value;
  item.done = false;
  item.priority = 1;

  todoItems.push(item);
  localStorage.setItem("todo-list", JSON.stringify(todoItems));

  renderTodoList();
});

function renderTodoList() {
  todoList.textContent = "";
  todoItems.forEach((item) => {
    let liElement = document.createElement("li");
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "delete";
    liElement.textContent = item.task;
    liElement.addEventListener("click", (event) => {
      event.target.style.textDecoration = "line-through";
    });

    deleteButton.addEventListener("click", (event) => {
      let index = Array.from(todoItems).findIndex(
        (todoItem) => todoItem === item
      );
      todoItems.splice(index, 1);
      console.log(todoItems);
      localStorage.setItem("todo-list", JSON.stringify(todoItems));
      renderTodoList();
    });
    liElement.appendChild(deleteButton);
    todoList.appendChild(liElement);
  });
}
