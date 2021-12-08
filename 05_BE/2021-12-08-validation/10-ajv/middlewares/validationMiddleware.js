const Ajv = require("ajv");
const ajv = new Ajv();

function makeValidationMiddleware(schema) {
	return function validateResourceMiddleware(req, res, next) {
		console.log('validateSchemaMiddleware');

		let data = req.body;
		const valid = ajv.validate(schema, data);

		if (!valid) {
			console.error(ajv.errors);
			return res.json(ajv.errors);
		}

		console.log("data successfully validated");
		next();
	};
}

module.exports = makeValidationMiddleware;
