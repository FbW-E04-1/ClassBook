const router = require('express').Router();
const checkRole = require('../middlewares/checkRole.js');
const upload = require('../middlewares/fileUpload.js');
const Photo = require("../models/Photo.js");


// we could create a custom middleware for each role.
// but then we would repeat the same logic for every role we have:

// const checkPhotographerRole = (req, res, next) => {
//     if (res.user.role !== "Photographer") return res.status(403).end();

//     next();
// };

// const checkUserRole = (req, res, next) => {
//     if (res.user.role !== "User") return res.status(403).end();

//     next();
// };

// instead, we create a higher order function that returns the actual middleware.
// we call it "checkRole".


// this endpoint shall only be used by Photographers
// we add the function checkRole that returns a middleware
// when we pass "Photographer", the middleware checks if the current user has this role
router.post("/", 
//checkRole("Photographer"),
upload,
 async (req, res) => {
    // if role is not Photographer: return status code 403
    const newPhoto = await Photo.create({
        title: "test",
        imgUrl: res.filePath,
        photographer: "61f702d40c2632805d85bcaa",
    });

    res.status(201).send(newPhoto._id);
});


router.get("/:id?", checkRole("Admin"), async (req, res) => {
    // since we appended user details from the token payload to res in checkAuth, we are able to use it here
    console.log(res.user);

    const result = await Photo.read(req.params.id);
    if (req.params.id && !result) return res.status(404).end();
    res.status(200).send(result);
});


module.exports = router;
