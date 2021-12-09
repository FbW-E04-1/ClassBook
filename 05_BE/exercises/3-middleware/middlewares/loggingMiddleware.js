
function loggingMiddleware(req, res, next) {

	if(req.body === undefined){
		res.send('NO BODY TO SHOW')
	}
	console.log('Time:', Date.now(), req.method, req.url) //req.headers);
	next();
}

module.exports = loggingMiddleware;
