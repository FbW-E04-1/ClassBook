let input = document.getElementById("myInput");
let submit = document.getElementById("submit");
let displayResult = document.getElementById("displayResult");

let message = (text) => {
  let div = document.createElement("div");
  div.textContent = text;
  displayResult.appendChild(div);
};

submit.addEventListener("click", () => {
  let value = input.value;
  displayResult.textContent =
    "The input is currently being validated. Please wait.";
  isInputValid(value).then(
    () => {
      message("input is valid");
    },
    () => {
      message("input is not valid");
    }
  );
  // .catch(() => {
  //   displayResult.textContent = "The input is not valid";
  // });
});

// let myPromise = new Promise(function (resolve, reject) {});
// let myPromise = isInputValid();

function isInputValid(value) {
  console.log("Wait for the number to be validated...");
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (Number(value) && value.length > 4) {
        resolve();
      } else {
        reject();
      }
    }, 10000);
  });
}
