require("dotenv").config();

const express = require("express");
const server = express();

require("./lib/database.js");

const checkAuth = require("./middlewares/checkAuth.js");

server.listen(process.env.PORT, () => console.log(`server listening on port ${process.env.PORT}`));

server.use(require('cookie-parser')());
server.use(express.json());
server.use(express.urlencoded({ extended: true }))


server.use('/api/auth', require('./routes/auth.js'));
server.use('/api/photos', checkAuth, require('./routes/photos.js'));
server.use('/api/photographers', checkAuth, require('./routes/photographers.js'));

// We can serve static files by using express.static.
// All the files that are in the directory "./public" can be accessed via GET /files/<path to file>
// whereas the path to file starts in "./public".
// Example: photo3.jpg is located in ./public/subfolder
// Our request needs to look like that: GET /files/subfolder/photo3.jpg
server.use("/files", express.static("./public"));

// We can serve our built frontend via express with express.static.
server.use("/app", express.static("./app"));
// By adding the following line, we make sure that whenever we try to access a subpage of our frontend directly
// we serve index.html instead, which then handles the request with react router.
server.use("/app/*", (req, res) => res.sendFile(__dirname + "/app/index.html"));

server.use(require("./middlewares/handleError.js"));
server.use("/", require("./middlewares/handleNotFound.js"));
