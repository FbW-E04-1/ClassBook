const router = require('express').Router();

const token = require("../lib/token.js");
const User = require("../models/User.js");


router.post("/", async function (req, res) {
    const user = await User.login(req.body.email, req.body.password);
    if (!user) return res.status(401).send("wrong credentials");

    res.cookie("token", token.sign(user), {
        maxAge: process.env.TOKEN_EXPIRATION * 1000,
        httpOnly: true,
    });
    return res.status(204).end();
});

router.delete('/', (_, res) => res.clearCookie("token").status(204).end());


module.exports = router;
