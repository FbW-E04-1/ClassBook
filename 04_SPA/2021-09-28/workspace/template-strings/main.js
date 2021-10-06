// let todoList = document.createElement("ul");
// todoList.classList.add("todo-list");

/**
 * insertAdjacentHTML
 * 
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML
 * <!-- beforebegin -->
    <p>
        <!-- afterbegin -->
        foo
        <!-- beforeend -->
    </p>
    <!-- afterend -->
 */
let todoList = document.querySelector('.todo-list');
debugger;

let todoItems = ["buy apples", "buy tomatoes", "buy avocado"];

todoItems.forEach((item) => {
    let todoItemHTML = `
        <li class="todo-list__item">
        <label><input type="checkbox" name="" id="" /> ${item}</label>
        </li>
    `;
    todoList.insertAdjacentHTML("afterbegin", todoItemHTML);
});
