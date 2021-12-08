require("dotenv").config();
const express = require("express");

const server = express();
const PORT = process.env.PORT_NUMBER;

server.listen(PORT, () => console.log(`Server running in port ${PORT}`));

server.get("/", (req, res) => {
  console.log("Checking if server works");
  res.send("server works!");

});

// MANAGEMENT OF TASKS
// tasks
//POST        /tasks
server.post("/tasks", (req, res) => {
  res.status(201).json("/tasks");
});

//GET         /tasks
server.get("/tasks", (req, res) => {
  res.status(200).json("/tasks");
});
//GET         /tasks/:taskId
server.get("/tasks/:taskId", (req, res) => {
  res.status(200).json("/tasks/:taskId");
});
//PUT         /tasks/:taskId
server.put("/tasks/:taskNameId", (req, res) => {
  res.status(201).json("/tasks/:taskId");
});

//DELETE      /tasks/
server.delete("/tasks/", (req, res) => {
  res.status(201).json("/tasks");
});

//DELETE      /tasks/:taskId
server.delete("/tasks/:taskId", (req, res) => {
  res.status(201).json("/tasks/:taskId");
});




// NEW USER & USER MANAGEMENT

//POST        /users
server.post("/users", (req, res) => {
  res.status(201).json("/users");
});
//GET         /users
server.get("/users", (req, res) => {
  res.status(201).json("/users");
});
//GET         /users/:userId
server.get("/users/userId", (req, res) => {
  res.status(201).json("/users/userId");
});
//PUT         /users/:userId
server.put("/users/userId", (req, res) => {
  res.status(201).json("/users/userId");
});
//DELETE      /users/:userId
server.delete("/users/userId", (req, res) => {
  res.status(201).json("/users/userId");
});


// TEAMS

//POST        /teams
server.post("/teams/", (req, res) => {
  res.status(201).json("/teams/");
});
//GET         /teams
server.get("/teams/", (req, res) => {
  res.status(201).json("/teams/");
});
//GET         /teams/:teamId
server.get("/teams/:teamId", (req, res) => {
  res.status(201).json("/teams/:teamId");
});
//PUT         /teams/:teamId
server.put("/teams/:teamId", (req, res) => {
  res.status(201).json("/teams/:teamId");
});
//DELETE      /teams/:teamId
server.delete("/teams/:teamId", (req, res) => {
  res.status(201).json("/teams/:teamId");
});



//SORT TASKS IN CATEGORIES OR COLUMNS
// categories
//POST        /categories
server.post("/catergories", (req, res) => {
  res.status(201).json("/catergories");
});
//GET         /categories
server.get("/catergories", (req, res) => {
  res.status(201).json("/catergories");
});
//GET         /categories/:categoryId
server.get("/categoies/categoryId", (req, res) => {
  res.status(201).json("/categoies/categoryId");
});
//PUT         /categories/:categoryId
server.put("/categoies/categoryId", (req, res) => {
  res.status(201).json("/categoies/categoryId");
});
//DELETE      /categories/:categoryId
server.delete("/categoies/categoryId", (req, res) => {
  res.status(201).json("/categoies/categoryId");
});


