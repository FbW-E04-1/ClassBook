const jwt = require("jsonwebtoken");
const secret = process.env.TOKEN_SECRET 

const options = {
  algorithm: "HS256",
  expiresIn: "3h",
};

const signToken = (payload) => {
    return jwt.sign(payload,secret, options);
}

const verifyToken = (token) => {
    if (!token) {
        let error = new Error('token not provided');
        console.error('error: ', error.message);
        return {valid: false, error: error};
    }

    return jwt.verify(token, secret, (error, payload) => {
        if (error) return {valid: false, error: error};
        
        return {valid: true, payload: payload}
   }) 
}

module.exports = {
    signToken,
    verifyToken
}