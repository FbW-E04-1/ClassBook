const route = require("express").Router();
const validateMidWare = require("../midWare/validateMidWare")
let users = {
  1: {
    firstname: "Lise",
    lastname: "Meitner",
    email: "lmeitner@example.com",
  },
  2: {
    firstname: "Albert",
    lastname: "Einstein",
    email: "aeinstein@example.de",
  },
  3: {
    firstname: "bert",
    lastname: "Einstein",
    email: "aeinstein@example.de",
  },
};

route.get("/", (req, res, next) => {
  try {
    res.send(`${req.method} ${req.url} `);
  } catch (error) {
    next(error);
  }
});

route.get("/:resId", (req, res, next) => {
  try {
    if (!Object.keys(users).includes(+req.params.resId)) {
      return res.status(404).end("user not found");
    }
    const targetUser = +req.params.resId;
    res.send(users[targetUser]);
  } catch (error) {
    next(error);
  }
});
// how to change res.headers ???!!!

route.post("/", validateMidWare,(req, res, next) => {
  try {
    /* const targetUser = +req.params.usersId
    users[targetUser] = req.body */
    const key = Object.keys(users).length + 1;
    users[key] = req.body;
    res.send(users);
  } catch (error) {
    next(error);
  }
});

route.delete("/:resId", (req, res, next) => {
  try {
    const targetUser = +req.params.resId;
    delete users[targetUser];
    /* res.send(users) */
    res.status(204).end();
  } catch (error) {
    next(error);
  }
});
/* function error() {
  throw new Error("I am an invented error!!");
} */
route.put("/:usersId", validateMidWare,(req, res, next) => {
  try {
    /* error(); */
    const targetUser = +req.params.usersId;
    users[targetUser] = req.body;

    res.send(users);
  } catch (error) {
    next(error);
  }
});

module.exports = route;
