let switcher = document.getElementById("switch");
let myForm = document.getElementById("my-form");
let backgroundElement = document.getElementById("background");

myForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let color = backgroundElement.value;
  document.body.style.backgroundColor = color;
  localStorage.setItem("background", color);
});

function switchTheme() {
  let theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.body.style.backgroundColor = "#333";
    document.body.style.color = "#fff";
  } else {
    document.body.style.backgroundColor = "#fff";
    document.body.style.color = "#000";
  }
}

switcher.addEventListener("click", () => {
  let currentTheme = localStorage.getItem("theme");
  let newTheme = "";
  if (currentTheme === null || currentTheme === "light") {
    newTheme = "dark";
  } else {
    newTheme = "light";
  }
  localStorage.setItem("theme", newTheme);
  switchTheme();
});

switchTheme();
