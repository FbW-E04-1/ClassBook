const {verifyToken} = require('../lib/token');

const authentication = (req, res, next) => {
    const userToken = req.cookies.jwt;
    
    const tokenValid = verifyToken(userToken);
    if (tokenValid.valid) {
        next();
    } else {
        console.error(tokenValid.error); //.message);
        res.status(401).end(); // 401 => unauthorized
    }
}

module.exports = authentication;
