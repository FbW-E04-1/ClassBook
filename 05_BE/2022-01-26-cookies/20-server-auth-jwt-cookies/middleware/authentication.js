const {verifyToken} = require('../lib/token')

const authentication = (req, res, next) => {
    console.log("req.body: ", req.body);
    
    const userToken = req.body.token;
    
    const tokenValid = verifyToken(userToken);
    if (tokenValid.valid) {
        console.log(tokenValid.payload)
        next()
    }
    
    else {
        console.error(tokenValid.error); //.message);
        res.status(401).end()
    }
}

module.exports = authentication