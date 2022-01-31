const token = require("../lib/token.js");

const checkAuth = (req, res, next) => {
    if (!req.cookies.token || !token.verify(req.cookies.token)) return res.status(401).end();
    next();
};

module.exports = checkAuth;
