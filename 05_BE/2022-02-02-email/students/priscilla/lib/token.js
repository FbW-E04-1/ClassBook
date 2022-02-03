const jwt = require("jsonwebtoken");

const algorithm = "HS256";

const sign = payload => {
    return jwt.sign(payload, process.env.TOKEN_SECRET, {
        algorithm,
        expiresIn: `${process.env.TOKEN_EXPIRATION}s`,
    });
}

const signVerificationEmail = payload => {
    console.log("payload:", payload);
    
    let token = jwt.sign({payload}, process.env.TOKEN_SECRET, {
        algorithm,
        expiresIn: "2d", 
        // expiresIn: "100800s", //=> 2 days in seconds
    });

    console.log("token:", token);

    return token;
}

const verify = token => {
    return jwt.verify(token, process.env.TOKEN_SECRET, { algorithms: [algorithm] }, (error, payload) => {
        if (error) return null;
        return payload;
    });
}

module.exports = {
    sign,
    signVerificationEmail,
    verify,
};
