const userSchema = {
	type: "object",
	properties: {
	  name: {type: "string"},
	  password: {
		  type: "string",
		  minLength: 8
	  }
	},
	required: ["name", "password"],
	additionalProperties: false
};

module.exports = userSchema;
