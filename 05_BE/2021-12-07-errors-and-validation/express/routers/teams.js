const router = require("express").Router();

router.get("/", (req, res, next) => {
    try {
        throw new Error("holy_moly");
    } catch (error) {
        next(error);
    }
});

module.exports = router;
