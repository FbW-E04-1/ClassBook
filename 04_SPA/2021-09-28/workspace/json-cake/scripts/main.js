import { recipesJSON } from "./data.js";

console.log(recipesJSON);

let recipes = JSON.parse(recipesJSON);

console.log(recipes);

let cakeSection = document.getElementById("cakes");

let myDiv = document.createElement("div");
myDiv.textContent = "hello";

recipes.cakes.forEach((recipe) => {
  let recipeHTML = `<div class="card" style="width: 15rem;">
    <img class="card-img-top" src="${
      recipe.image
    }" style="height: 10rem; object-fit: cover;">
    <div class="card-body">
        <h3>${recipe.title}</h3>
        <p>${recipe.author}</p>
        <p>Ingredients: ${recipe.ingredients.join(", ")}</p>
    </div>
</div>
`;

  // cakeSection.appendChild()

  cakeSection.insertAdjacentHTML("beforeend", recipeHTML);

//   cakeSection.insertAdjacentElement("afterbegin", myDiv);
});
