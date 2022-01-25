const jwt = require("jsonwebtoken");

// please remove the default value before you use it in your app
// keep your secret in .env!
const secret = process.env.TOKEN_SECRET || "kfjgrt9negosawewtherethj904htg5r9oehgreloa8eh5g5ni4we9gtne";

// in the options we can define the algorithm jwt shall use for the signature
// with "expiresIn" we set a time limit after which the token will be invalid
// in this example the token is valid for 15 seconds
const options = {
    algorithm: "HS256",
    // ...
    expiresIn: "15s",
};

// we create the function signToken to only "expose" the parameters we want to be dynamic
// secret and default options are all set and the only thing we can change is the payload
// we return the ready-to-use token
const signToken = (payload) => {
    return jwt.sign(payload, secret, options);
};

// the function verifyToken takes the token and verifies it (as the name suggests...)
// on success it returns the decoded payload
// on error it logs the error and returns nothing
const verifyToken = (token) => {
    return jwt.verify(token, secret, (error, payload) => {
        if (error) return console.error(error);

        return payload;
    });
};

module.exports = {
    signToken,
    verifyToken,
};
