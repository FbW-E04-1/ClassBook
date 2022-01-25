const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// employees data in a database
const employees = [
  { firstName: "Jane", lastName: "Smith", age: 20 },
  //...
  { firstName: "John", lastName: "Smith", age: 30 },
  { firstName: "Mary", lastName: "Green", age: 50 },
];

app.use(bodyParser.json());

app.get("/employees", (req, res) => {
  const { firstName, lastName, age } = req.query;
  let results = [...employees];
  if (firstName) {
    results = results.filter((r) => r.firstName === firstName);
  }

  if (lastName) {
    results = results.filter((r) => r.lastName === lastName);
  }

  if (age) {
    results = results.filter((r) => +r.age === +age);
  }
  res.json(results);
});

app.listen(3007, () => console.log("server started"));
