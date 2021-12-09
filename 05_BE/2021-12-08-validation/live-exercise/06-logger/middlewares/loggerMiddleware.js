function loggerMiddleware(req, res, next) {
	console.log(`LOGGER: ${req.method} ${req.url}`);
	next();
}

module.exports = loggerMiddleware;
