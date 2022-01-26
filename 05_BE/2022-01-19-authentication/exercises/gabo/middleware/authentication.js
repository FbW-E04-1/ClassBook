const {verifyToken} = require('../lib/token')

const authentication = (req, res, next) => {

    const userToken = req.body.token;
    const tokenValid = verifyToken(userToken);
    if (tokenValid.valid) {
        console.log(tokenValid.payload)
        next()
    }
    
    else {
        console.error(tokenValid.error);
        res.status(401).end()
    }
}

module.exports = authentication