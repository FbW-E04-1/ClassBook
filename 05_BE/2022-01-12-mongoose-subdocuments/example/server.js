require("dotenv").config();

const express = require("express");
const server = express();
server.listen(process.env.PORT, () => console.log(`server listening on port ${process.env.PORT}`));

// we require the ready-to-use database from lib/database.js
// since mongoose handles the connection, we just need to require mongoose in our models
require("./lib/database.js");

server.use(express.json());

// we require our model...
const User = require("./models/User.js");

server.post("/users", async (req, res, next) => {
    try {
        // ...and call the create function from it
        const user = req.body;
        const newUser = await User.create(user);
        res.json(newUser);
    } catch (error) {
        res.status(400).json(error);
    }
});

// Read
server.get("/users", async (req, res, next) => {
    try {
        const users = await User.read();
        res.json(users);
    } catch (error) {
        next(error);
    }
});

// Update
server.patch("/users/:userId", async (req, res, next) => {
    try {
        // in this function call we send an additional property 'bla'
        // however, this will not be used in User.update() because we do not extract it in the parameter destructuring
        // also check the order of the properties. they do not match the order in .update() in User.js
        const updatedUser = await User.update(req.params.userId, {
            password: req.body.password,
            age: req.body.age,
            username: req.body.username,
            bla: "blubb",
        });

        res.json(updatedUser);
    } catch (error) {
        next(error);
    }
});

// Delete
server.delete("/users/:userId", async (req, res, next) => {
    try {
        await User.remove(req.params.userId);
        res.status(204).end();
    } catch (error) {
        next(error);
    }
});

server.use((error, req, res, next) => {
    console.log(error);
    res.status(500).end();
});
