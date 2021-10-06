// https://restcountries.com/v3.1/all

/**
 * A promise can be in one of 3 possible states:
 *
 * - pending
 * - fullfilled
 * - rejected
 *
 */
let url = "https://restcountries.com/v3.1/all";
let searchUrl = "https://restcountries.com/v3.1/name/";

let button = document.getElementById("submit");
let searchForm = document.getElementById("search-form");
let nameInput = document.getElementById("country-name");
let fullTextElements = document.querySelectorAll("input[name=full-text]");

fullTextElements.forEach((element) => {
  element.addEventListener("change", (event) => {
    console.log(event.target.value);
  });
});

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let value = nameInput.value;
  searchCountry(value);
  searchForm.reset();
});

function onChangeFullText() {
  console.log("change");
}

async function searchCountry(searchString) {
  let isFullTextSearch;
  fullTextElements.forEach((element) => {
    if (element.checked === "checked") {
    //   isFullTextSearch = element.value === "no" ? false : true;
        if (element.value === "no") {
            isFullTextSearch = false;
        } else {
            isFullTextSearch = true;
        }
    }
  });
  let response = await fetch(`${searchUrl}${searchString}?fullText=${isFullTextSearch}`);
  let data = await response.json();
 
  console.log(data);
}
//

// button.addEventListener("click", () => {
//   for (let country of countries) {
//     console.log(country.name.common);
//   }
// });

function printCountryNames(countries) {
  for (let country of countries) {
    console.log(country.name.common);
  }
}

async function getCountryList() {
  // let response = await fetch(url);
  let response = await fetch(url);
  let countries = await response.json();
}

getCountryList();
