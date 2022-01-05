require("dotenv").config();

const express = require("express");
const server = express();

server.listen(process.env.PORT, () => console.log(`server running on port ${process.env.PORT}`));

// populate req.body - req.header 'Content-Type' must be 'application/json'
server.use(express.json());

// '404' if nothing else got triggered
server.use((req, res) => res.status(404).end());
