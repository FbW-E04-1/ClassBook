let submissionForm = document.getElementById("submission-form");
let addItemInput = document.getElementById("add-item");
let todoListElement = document.getElementById("todo-list");

let todoItems = [];
if (localStorage.getItem("todoItems") !== null) {
  todoItems = JSON.parse(localStorage.getItem("todoItems"));
}

renderTodoList();
/**
 *
 * {
 *   task: "buy pizza",
 *   done: true,
 *   priority: 4,
 * }
 */

// let todoItems = JSON.parse(localStorage.getItem("todoItems")) || [];

submissionForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let inputValue = addItemInput.value;

  // if the item we are trying to add is an empty string, stop the function execution and leave
  if (inputValue === "") {
    return;
  }

  let todoItem = {
    task: inputValue,
    done: false,
  };

  todoItems.push(todoItem);
  localStorage.setItem("todoItems", JSON.stringify(todoItems));

  renderTodoList();
  addItemInput.value = "";
});

function renderTodoList() {
  todoListElement.textContent = "";
  todoItems.forEach((item) => {
    let liElement = document.createElement("li");
    let spanElement = document.createElement("span");
    let deleteButton = document.createElement("button");

    deleteButton.textContent = "delete";

    deleteButton.addEventListener("click", (event) => {
        // event.stopPropagation();
      console.log(event.target);
      /**
       * <li>buy pizza <button>delete</button></li>
       * 
       * <li><span>buy pizza</span> <button>delete</button></li>
       */
      let itemToDelete = event.target.closest("li");
      let todoElementsArray = Array.from(todoListElement.children);
      let index = todoElementsArray.indexOf(itemToDelete);
      todoItems.splice(index, 1);

      localStorage.setItem("todoItems", JSON.stringify(todoItems));
      renderTodoList();
    });

    spanElement.textContent = item.task;
    liElement.appendChild(spanElement);
    liElement.appendChild(deleteButton);

    if (item.done === true) {
      spanElement.style.textDecoration = "line-through";
    }

    spanElement.addEventListener("click", (event) => {
      console.log(event.target);
      event.target.style.textDecoration = "line-through";
      /**
       * todoListElement.children => HTMLCollection
       * Array.from(todoListElement.children) => array
       * Array.from(todoListElement.children).indexOf => index
       */
      let todoElementsArray = Array.from(todoListElement.children);
      let index = todoElementsArray.indexOf(event.target.closest("li"));

      // set the property "done" to the opposite of the current value of the property "done"
      todoItems[index].done = !todoItems[index].done;

      //   if (todoItems[index].done === true) {
      //     todoItems[index].done = false;
      //   } else {
      //     todoItems[index].done = true;
      //   }

      localStorage.setItem("todoItems", JSON.stringify(todoItems));
      renderTodoList();
    });

    todoListElement.appendChild(liElement);
  });
}
