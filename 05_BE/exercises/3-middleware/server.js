require("dotenv").config();
const express = require("express");
server.use(express.json()) // Body Parser MiddleWare that takes the http(client) and transfer it to the express req.body(server)

const server = express();
const PORT = process.env.PORT_NUMBER;

server.listen(PORT, () => console.log(`Server running in port ${PORT}`));


const middleware = require('./middlewares/loggingMiddleware')
server.use(middleware)



server.get("/", (req, res) => {
  console.log("server works!");
  console.log(req.body);
  res.send(req.body)
  res.end()
  
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
const { json } = require("express");
server.use("/categories", categoriesRouter);
