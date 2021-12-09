require("dotenv").config();
const express = require("express");
const Ajv = require("ajv");
const ajv = new Ajv();

const server = express();

server.listen(process.env.PORT, () =>
  console.log(`server is running on port ${process.env.PORT}`)
);

server.use(express.json());

//AJV Middleware
function ajvMiddlewareFn(req, res, next) {
  console.log("AJVMiddelware");

  const schema = {
    type: "object",
    properties: {
      foo: { type: "integer" },
      bar: { type: "string" },
      password: {
        type: "string",
        minLength: 8,
      },
    },
    required: ["foo"],
    additionalProperties: false,
  };

  const valid = ajv.validate(schema, req.body);

  if (!valid) {
    return res.json(ajv.errors);
  }

  console.log("succesfully validated!!!");

  next();
}
/* server.use(ajvMiddlewareFn); */



function validateUserMiddleware(req, res, next) {
  console.log("AJVMiddelware");

  const schema = {
    type: "object",
    properties: {
      foo: { type: "integer" },
      bar: { type: "string" },
      password: {
        type: "string",
        minLength: 8,
      },
    },
    required: ["foo"],
    additionalProperties: false,
  };

  const valid = ajv.validate(schema, req.body);

  if (!valid) {
    return res.json(ajv.errors);
  }

  console.log("succesfully validated!!!");

  next();
}

//POST for users only
server.post("/user", validateUserMiddleware, (req, res) => {
  res.send(req.body);
});

// 404 if nothikg lese is triggered
server.use((req, res) => res.status(404).send("<h1> ERROR 404</h1>"));
