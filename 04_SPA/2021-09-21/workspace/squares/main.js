const changeBgButton = document.getElementById("change-bg");
const container = document.getElementById("main");

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeBg() {
  let color = getRandomColor();
  console.log(color);
  container.style.backgroundColor = color;
}

function fillSquare() {
  let grid = document.createElement("div");
  grid.classList.add("grid");
  let min = 100;
  let max = 1000;
  let cellCount = getRandomInt(min, max);
  container.appendChild(grid);
  for (let i = 0; i < cellCount; i++) {
    let cell = document.createElement("div");
    let color = getRandomColor();
    cell.classList.add("cell");
    grid.appendChild(cell);
    setTimeout(function () {
      cell.style.setProperty("--bg-color", color);
    }, i * 25);
  }
}

function getRandomInt(min, max) {
  return Math.random() * (max - min) + min;
}

function reset() {
  container.innerHTML = "";
}

document.addEventListener("click", function (e) {
  let target = e.target;
  console.log(target.matches("#change-bg"));
  if (target.matches("#change-bg")) {
    reset();
    changeBg();
  } else if (target.matches("#fill-square")) {
    reset();
    fillSquare();
  }
});
