const router = require('express').Router();
const Photo = require("../models/Photo.js");


router.post("/", async (req, res) => {
    const newPhoto = await Photo.create({
        title: "test",
        imgUrl: "https://picsum.photos/200/300",
        photographer: "61f702d40c2632805d85bcaa",
    });

    res.status(201).send(newPhoto._id);
});

router.get("/:id?", async (req, res) => {
    const result = await Photo.read(req.params.id);
    if (req.params.id && !result) return res.status(404).end();
    res.status(200).send(result);
});


module.exports = router;
