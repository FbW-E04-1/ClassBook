require("dotenv").config();

const express = require("express");
const server = express();

server.listen(process.env.PORT, () => console.log(`server listening on port ${process.env.PORT}`));

server.use(require('./middlewares/logger'));

server.use(express.json());

// custom routes

// /custom routes

server.use(require('./middlewares/errorHandler'));
server.use("/", require("./middlewares/notFoundHandler"));
