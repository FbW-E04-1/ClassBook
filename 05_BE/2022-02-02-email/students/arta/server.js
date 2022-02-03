require("dotenv").config();

const express = require("express");
const server = express();

require("./lib/database.js");

const checkAuth = require("./middlewares/checkAuth.js");

server.listen(process.env.PORT, () => console.log(`server listening on port ${process.env.PORT}`));

server.use(require('cookie-parser')());
server.use(express.json());
server.use(express.urlencoded({ extended: true }))

server.use('/auth', require('./routes/auth.js'));
server.use('/photos', checkAuth, require('./routes/photos.js'));
server.use('/photographers', checkAuth, require('./routes/photographers.js'));

server.use(require("./middlewares/handleError.js"));
server.use("/", require("./middlewares/handleNotFound.js"));
