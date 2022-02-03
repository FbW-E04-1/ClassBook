const User = require('../models/User.js');

const checkEmailIsVerified = async (req, res, next) => {
	let user = await User.readByEmail(req.body.email);

	// early bailout
	if (!user.isEmailVerified) return res.status(401).end();

	console.log("email is verified");
	// continues here only if user.isEmailVerified == true;
	next();
};

const checkEmailIsVerified2 = (req, res, next) => {
	let user = User.readByEmail(req.body.email);

	if (user.isEmailVerified) return next();

	res.status(401).end();
};

const checkEmailIsVerified3 = (req, res, next) => {
	let user = User.readByEmail(req.body.email);

	if (user.isEmailVerified){
		next();
	} else {
		res.status(401).end();
	}
};

module.exports = checkEmailIsVerified;
