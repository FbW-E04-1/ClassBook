const express = require("express");
const router = express.Router();

//POST        /users
router.post("/", (req, res) => {
  res.status(201).json("/users");
});
//GET         /users
router.get("/", (req, res) => {
  res.status(201).json("/users");
});
//GET         /users/:userId
router.get("/:userId", (req, res) => {
  res.status(201).json("/users/userId");
});
//PUT         /users/:userId
router.put("/:userId", (req, res) => {
  res.status(201).json("/users/userId");
});
//DELETE      /users/:userId
router.delete("/:userId", (req, res) => {
  res.status(201).json("/users/userId");
});

module.exports = router;
