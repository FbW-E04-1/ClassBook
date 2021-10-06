let data = fetch("https://restcountries.com/v3.1/name/peru");
console.log(data);

data
  .then((response) => {
    console.log("success");
    console.log(data);
    console.log(response);
    return response.json();
  })
  .then((data) => {
    console.log(data);
  });
