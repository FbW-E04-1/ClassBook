let food = ["tomatoes", "avocado", "onions"];

let todoList = [
   
]
localStorage.setItem("food", JSON.stringify(food));


let storedFood = JSON.parse(localStorage.getItem("food"));
storedFood.splice(1, 1)
localStorage.setItem("food", JSON.stringify(storedFood));