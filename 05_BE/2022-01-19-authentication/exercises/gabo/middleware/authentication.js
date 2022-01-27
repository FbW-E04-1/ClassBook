const {verifyToken} = require('../lib/token')

const authentication = (req, res, next) => {
    console.log("req.body: ", req.body);
    
    const userToken = req.cookies.jwt;
    
    const tokenValid = verifyToken(userToken);
    if (tokenValid.valid) {
        console.log(tokenValid.payload)
        req.userId = tokenValid.payload.userId;
        next()
    }
    
    else {
        console.error(tokenValid.error);
        res.status(401).end()
    }
}

module.exports = authentication