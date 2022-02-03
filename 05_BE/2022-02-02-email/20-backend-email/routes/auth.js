const router = require('express').Router();

const token = require("../lib/token.js");
const User = require("../models/User.js");
const checkEmailIsVerified = require("../middlewares/checkEmailIsVerified.js");

// login
router.post("/", checkEmailIsVerified, async function (req, res) {
    const user = await User.login(req.body.email, req.body.password);
    if (!user) return res.status(401).send("wrong credentials");

    res.cookie("token", token.sign(user), {
        maxAge: process.env.TOKEN_EXPIRATION * 1000,
        httpOnly: true,
    });
    return res.status(204).end();
});

router.delete('/', (_, res) => res.clearCookie("token").status(204).end());

router.post("/signup", async (req, res) => {
    const newUser = await User.register({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        role: "Photographer",
    });

    res.status(201).send(newUser._id);
});

router.get("/verifyEmail/:email/:secret", (req, res) => {
    console.log('email: ', req.params.email);
    console.log('secret: ', req.params.secret);

    // maybe move to middleware
    const payload = token.verify(req.params.secret);
    if (!payload) return res.status(401).end();

    // return form for login with only password field (because the email address is already known)
    //        the form has a target POST /auth/verifyEmail
    // compare secret with computed-secret

    res.status(200).send(
        '<!ENCTYPE html>'
        + '<html><body>' + "\n"
        +'<form method="POST" action="/auth/verifyEmailLogin">'  + "\n"// login route, see top route in this file 'POST /'
        + "\t" + `<input type="hidden" name="email" value="${req.params.email}">` + "\n"
        + "\t" + 'Password: <input name="password" type="password">' + "\n"
        + "\t" + '<input type="submit">'
        +'</form>' + "\n"
        + '</body></html>');
    //req.params.email + " verified"); // lookup status code
})

router.post("/verifyEmailLogin", async function (req, res) {
    const user = await User.login(req.body.email, req.body.password);
    if (!user) return res.status(401).send("wrong credentials");

    user.isEmailVerified = true;
    await User.update(user.userId, user);

    res.cookie("token", token.sign(user), {
        maxAge: process.env.TOKEN_EXPIRATION * 1000,
        httpOnly: true,
    });
    return res.status(204).end();
});


module.exports = router;
