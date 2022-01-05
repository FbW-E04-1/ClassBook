function loggerMiddleware(req, res, next) {
    console.log(`This is logger ${req.method} ${req.url} ${Date.now()}`)
    next()
}

module.exports = loggerMiddleware;