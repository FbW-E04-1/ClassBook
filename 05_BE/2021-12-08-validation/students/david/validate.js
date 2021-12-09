const Ajv = require("ajv");
const ajv = new Ajv();

const schema = {
  type: "object",
  properties: {
    foo: { type: "integer" },
    bar: { type: "string" },
    anotherProperty: {type: "string"}
  },
  required: ["foo"],
  additionalProperties: true,
};

const data = { foo: 1, bar: "abc", anotherProperty: "123" };
const valid = ajv.validate(schema, data);

if (valid) {
  console.log("is valid");
} else {
  console.log(ajv.errors);
}
