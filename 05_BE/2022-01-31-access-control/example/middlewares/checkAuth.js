const token = require("../lib/token.js");

const checkAuth = (req, res, next) => {
    if (!req.cookies.token) return res.status(401).end();

    // we extract the payload from the token and store it in a variable.
    const payload = token.verify(req.cookies.token);
    if (!payload) return res.status(401).end();

    // when we made sure that everything is alright,
    // we add a new property 'user' to the res object with the information from the payload.
    res.user = {
        userId: payload.userId,
        name: payload.name,
        role: payload.role,
    };

    next();
};

module.exports = checkAuth;
