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

    if (!newUser) return res.status(409).send("could not create user");
    //                              409 := Conflict (user with given email already exists)

    res.status(201).send(newUser._id);
});

router.get("/verifyEmail/:email/:secret", (req, res) => {
    let email = req.params.email;
    let secret = req.params.secret;

    res.status(200).send(
        '<!ENCTYPE html>'
        + '<html><body>' + "\n"
        + "\t" + `<p>Please verify your email address <br><code>${email}</code> <br>by providing your password.</p>` + "\n"

        + `<form method="POST" action="/auth/verifyEmail/${email}/${secret}">`  + "\n"
        + "\t" + 'Password: <input name="password" type="password">' + "\n"
        + "\t" + '<input type="submit">'
        + '</form>' + "\n"

        + '</body></html>');
})

router.post("/verifyEmail/:email/:secret", async function (req, res) {
    let email = req.params.email;
    let secret = req.params.secret;
    let password = req.body.password;

    const secret = token.verify(secret);
    if (!secret) return res.status(401).send("could not verify email address");

    const user = await User.login(email, password);
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
