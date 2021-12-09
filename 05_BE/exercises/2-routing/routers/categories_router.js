const express = require("express");
const router = express.Router();

//POST        /categories
router.post("/", (req, res) => {
  res.status(201).json("/catergories");
});
//GET         /categories
router.get("/", (req, res) => {
  res.status(201).json("/catergories");
});
//POST        /categories
router.post("/:categoryId", (req, res) => {
  res.status(201).json("/categories/:categoryID");
});
//GET         /categories/:categoryId
router.get("/:categoryId", (req, res) => {
  res.status(201).json("/categoies/categoryId");
});
//PUT         /categories/:categoryId
router.put("/:categoryId", (req, res) => {
  res.status(201).json("/categoies/categoryId");
});
//DELETE      /categories/:categoryId
router.delete("//:categoryId", (req, res) => {
  res.status(201).json("/categoies/categoryId");
});

module.exports = router;
