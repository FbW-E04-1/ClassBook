const Ajv = require("ajv");
const ajv = new Ajv();

const schema = {
  type: "object",
  properties: {
    foo: {type: "integer"},
    bar: {type: "string"},
	anotherProperty: {type: "string"},
	test: {} // no further constraints - we do note care about the type
  },
  required: ["foo", "test"],
  additionalProperties: false // try: true
};

const data = {
	foo: "1", 
	bar: "abc",
	anotherProperty: "123",
	test: 1234
};
const valid = ajv.validate(schema, data);

if (valid) {
	console.log("data is valid");
} else {
	console.log(ajv.errors);
}
