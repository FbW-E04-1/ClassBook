const schema = {
	type: "object",
	properties: {
	  email: {
		  format: "email"
	  },
	  password: {
		  type: "string"
		  // .* any character any number of times
		  // [] => defines a character class
		  // [\-!@#$%^&*0123456789] => '\' escapes the '-'
		  // []+ => the '+' multiplier means: at least one time (e.g. "0", "13237")
		//   pattern: "^.*[\-!@#$%^&*0123456789]+.*$"
		//   pattern: "^a+$" // the whole string must consist only of "a"s
	  },
	  gender: {
		  enum: [ "m", "f", "d"]
	  }
	},
	required: ["email", "password"],
	additionalProperties: false
};

module.exports = schema;
