const express = require("express");
const router = express.Router();

//POST        /tasks
router.post("/", (req, res) => {
  res.status(201).json("/tasks");
});

//GET         /tasks
router.get("/", (req, res) => {
  res.status(200).json("/tasks");
});
//GET         /tasks/:taskId
router.get("/:taskId", (req, res) => {
  res.status(200).json("/tasks/:taskId");
});
//PUT         /tasks/:taskId
router.put("/:taskNameId", (req, res) => {
  res.status(201).json("/tasks/:taskId");
});

//DELETE      /tasks/
router.delete("/", (req, res) => {
  res.status(201).json("/tasks");
});

//DELETE      /tasks/:taskId
router.delete("/:taskId", (req, res) => {
  res.status(201).json("/tasks/:taskId");
});

module.exports = router;
