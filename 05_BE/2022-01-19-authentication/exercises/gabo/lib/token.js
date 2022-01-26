const jwt = require("jsonwebtoken");
const secret = process.env.TOKEN_SECRET 

const options = {
  algorithm: "HS256",
  expiresIn: "15s",
};

const signToken = (payload) => {
    return jwt.sign(payload,secret, options);
}

const verifyToken = (token) => {
    return jwt.verify(token, secret, (error, payload) => {
        if (error) return {valid: false, error: error};
        
        return {valid: true, payload: payload}
   }) 
}

module.exports = {
    signToken,
    verifyToken
}