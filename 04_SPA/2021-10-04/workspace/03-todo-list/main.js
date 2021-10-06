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

// let form = document.getElementById("form");
// let itemInput = document.getElementById("item");
// let todoList = document.querySelector(".todo-list");

// let todoItems = JSON.parse(localStorage.getItem("todo-list")) || [];

// renderTodoList();

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   let item = {};
//   item.task = itemInput.value;
//   item.done = false;
//   item.priority = 1;

//   todoItems.push(item);
//   localStorage.setItem("todo-list", JSON.stringify(todoItems));

//   renderTodoList();
// });

// function renderTodoList() {
//   todoList.textContent = "";
//   todoItems.forEach((item) => {
//     let itemHTML = `<li>${item}</li>`;
//     todoList.insertAdjacentHTML("beforeend", itemHTML);
//   });
// }

/**
 * - we are creating a variable called input
 * - we get access to an html element using its id. The id is "input"
 * - after this, the variable input will contain the html element with id "input"
 */
let input = document.getElementById("input");
let submit = document.getElementById("btn");
let todo = document.querySelector(".todoList");
let items = JSON.parse(localStorage.getItem("list")) || [];
renderList();
submit.addEventListener("click", function (e) {
  e.preventDefault();
  let val = input.value;
  // let li = document.createElement("li")
  // todo.appendChild("li")
  items.push(val);
  localStorage.setItem("list", JSON.stringify(items));
  input.value = "";
  renderList();
});
function renderList() {
  todo.textContent = "";
  items.forEach((item) => {
    let newElement = `<li class="delete">${item}  </li>`;
    todo.insertAdjacentHTML("beforeend", newElement);
  });
}

let close = document.querySelectorAll(".delete");

close.forEach((item) =>
  item.addEventListener("click", () => {
    item.style.display = "none";
    let content = item.textContent;
    console.log(items);
    let num = items.indexOf(content);
    console.log(num);
    items.splice(num, 1);
    localStorage.setItem("list", JSON.stringify(items));
  })
);


console.log("bla");
