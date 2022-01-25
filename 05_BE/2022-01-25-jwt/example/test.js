const { signToken, verifyToken } = require("./lib/token");

// this is the data we put into the token
// do not store any sensitive information like credentials in here as the client can easily access the data
const payload = {
    userId: 1,
    name: "Dominik",
    permissions: ["read_orders", "write_products"],
};

// when we use our custom token library, we do not need to take care of the default options or the secret
// the whole token logic is encapsulated in lib/token.js
const token = signToken(payload);
const decodedPayload = verifyToken(token);
console.log(decodedPayload);
