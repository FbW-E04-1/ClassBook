
function loggingMiddleware(req, res, next) {
	console.log('Time:', Date.now(), req.method, req.url) //req.headers);
	next();
}

module.exports = loggingMiddleware;
