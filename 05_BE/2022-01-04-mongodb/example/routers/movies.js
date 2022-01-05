const router = require("express").Router();
// we can also require the same database in this file.
// it uses the same database connection as in server.js because we only reference to the module here.
const db = require("../lib/database.js");

router.get("/", async (req, res, next) => {
    // if we only need some specific documents, we can filter the result directly while fetching from the database.
    // by passing an object to find() with the needed properties and values we only get the documents that match this filter.
    const movies = await db.collection("movies").find({ runtime: 14 }).toArray();

    res.json(movies);
});

module.exports = router;
