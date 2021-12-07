const express = require("express");
const cors = require("cors");
const app = express();
const sanitizeHtml = require("sanitize-html");

app.listen(3210, () => console.log("server listening on port 3210"));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post("/login", (req, res) => {
    if (!req.body.username) return res.status(400).json(`username is required`);
    if (!req.body.password) return res.status(400).json(`password is required`);
    if (req.body.username.length > 8) return res.status(400).json(`username is too long`);

    const sanitizedUsername = sanitizeHtml(req.body.username, {
        allowedTags: []
    });

    res.json(`Hello, ${sanitizedUsername}!`);
});
