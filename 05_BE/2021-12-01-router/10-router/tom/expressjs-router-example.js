require("dotenv").config();

const express = require("express"); // import express from "express"
const server = express();

server.listen(process.env.PORT, () => console.log(`server running on port ${process.env.PORT}`));

// importing the router
var birds = require('./routers/birds.js');

// mount the 'birds'-router to the paths beginning with '/birds'
server.use('/birds', birds);
