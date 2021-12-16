const schema = {
	type: "object",
	properties: {
	  email: {format: "email"},
	  password: {
		  type: "string",
	  }
	},
	required: ["email", "password"],
	additionalProperties: false
};

module.exports = schema;
