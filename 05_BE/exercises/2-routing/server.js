require("dotenv").config();
const express = require("express");

const server = express();
const PORT = process.env.PORT_NUMBER;

server.listen(PORT, () => console.log(`Server running in port ${PORT}`));

server.get("/", (req, res) => {
  console.log("server works!");
  res.send("server works!");
});

// MANAGEMENT OF TASKS
const tasksRouter = require("./routers/tasks_router");
server.use("/tasks", tasksRouter);

// NEW USER & USER MANAGEMENT
const userRouter = require("./routers/user_router");
server.use("/users", userRouter);

// TEAMS
const teamsRouter = require("./routers/teams_router");
server.use("/teams", teamsRouter);

// SORT TASKS IN CATEGORIES OR COLUMNS
const categoriesRouter = require("./routers/categories_router");
server.use("/categories", categoriesRouter);
