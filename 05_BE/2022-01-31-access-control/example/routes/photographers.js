const router = require('express').Router();
const checkRole = require('../middlewares/checkRole.js');
const User = require("../models/User.js");


router.post("/", checkRole("Admin"), async (req, res) => {
    const newUser = await User.register({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        role: "Photographer",
    });

    res.status(201).send(newUser._id);
});

router.get("/:id?", async (req, res) => {
    const result = await User.read(req.params.id);
    if (req.params.id && !result) return res.status(404).end();
    res.status(200).send(result);
});


module.exports = router;
