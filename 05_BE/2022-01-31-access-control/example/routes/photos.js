const router = require('express').Router();
const Photo = require("../models/Photo.js");


// this endpoint shall only be used by Photographers
router.post("/", async (req, res) => {
    // if role is not Photographer: return status code 403
    const newPhoto = await Photo.create({
        title: "test",
        imgUrl: "https://picsum.photos/200/300",
        photographer: "61f702d40c2632805d85bcaa",
    });

    res.status(201).send(newPhoto._id);
});

router.get("/:id?", async (req, res) => {
    // since we appended user details from the token payload to res in checkAuth, we are able to use it here
    console.log(res.user);

    const result = await Photo.read(req.params.id);
    if (req.params.id && !result) return res.status(404).end();
    res.status(200).send(result);
});


module.exports = router;
