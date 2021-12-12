const Ajv = require("ajv");
const ajv = new Ajv();

function validateMidWare(req, res, next) {
  const schema = {
    type: "object",
    properties: {
      firstName: { type: "string" },
      lastName: { type: "string" },
      email: { type: "string" },// can't be type email !!
    },
    required: ["firstName", "lastName", "email"],
    additionalProperties: true,
  };
  const valid = ajv.validate(schema, req.body);

  if (!valid) {
    console.log(ajv.errors);
    return res.status(400).send(ajv.errors);
  } else {
    // res.json(req.body); cant be sent twice from here and userRouter
    console.log("data successfully validated");

    next();
  }
}

module.exports = validateMidWare;
