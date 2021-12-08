const resourceSchema = {
	type: "object",
	properties: {
	  foo: {type: "integer"},
	  bar: {type: "string"},
	  password: {
		  type: "string",
		  minLength: 8
	  }
	},
	required: ["foo", "password"],
	additionalProperties: false
};

module.exports = resourceSchema;