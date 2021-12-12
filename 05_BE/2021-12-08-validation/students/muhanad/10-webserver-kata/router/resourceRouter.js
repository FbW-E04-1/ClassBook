const route = require("express").Router();

const resource = [
  { id: 1, name: "first" },
  { id: 2, name: "second" },
  { id: 3, name: "third" },
];

route.get("/", (req, res, next) => {
  try {
    res.send(`${req.method} ${req.url} `);
  } catch (error) {
    next(error);
  }
});

route.get("/:resId", (req, res, next) => {
  try {
    res.send(`${req.method} ${req.url} ${req.params.resId}`);
  } catch (error) {
    next(error);
  }
});

route.post("/", (req, res, next) => {
  try {
    /* console.log(`${req.method} ${req.url}`); */
    res.status(201).send(req.body);
  } catch (error) {
    next(error);
  }
});

route.delete("/:resId", (req, res, next) => {
  try {
    // or just filter the (not) Ids
    const target = resource.find((item) => item.id === +req.params.resId);
    const index = resource.indexOf(target);
    const clone = [...resource];
    clone.splice(index, 1);
    res.send(clone);
  } catch (error) {
    next(error);
  }
});

route.put("/:resourceId", (req, res, next) => {
  try {
    res.status(201).send(`${req.method} ${req.url} ${req.params.resourceId}`);
    console.log(resource);
  } catch (error) {
    next(error);
  }
});

module.exports = route;
