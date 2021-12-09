const express = require("express");
const router = express.Router();


//POST        /teams
router.post("/", (req, res) => {
  res.status(201).json("/teams/");
});
//GET         /teams
router.get("/", (req, res) => {
  res.status(201).json("/teams/");
});
//GET         /teams/:teamId
router.get("/:teamId", (req, res) => {
  res.status(201).json("/teams/:teamId");
});
//PUT         /teams/:teamId
router.put("/:teamId", (req, res) => {
  res.status(201).json("/teams/:teamId");
});
//DELETE      /teams/:teamId
router.delete("/:teamId", (req, res) => {
  res.status(201).json("/teams/:teamId");
});

module.exports = router;
