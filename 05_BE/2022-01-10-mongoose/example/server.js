require("dotenv").config();

const express = require("express");
const server = express();
server.listen(process.env.PORT, () => console.log(`server listening on port ${process.env.PORT}`));

// we require the ready-to-use database from lib/database.js
// since mongoose handles the connection, we just need to require mongoose in our models
require("./lib/database.js");


// we require our model...
const User = require("./models/User.js");

server.post("/users", async (req, res, next) => {

    try {
        // ...and call the create function from it
        const newUser = await User.create("Hiwa13", "myPassword", 44);
        res.json(newUser);
    } catch (error) {
        res.status(400).json(error);
    }
    
})

server.use((error, req, res, next) => {
    res.status(500).end();
});
