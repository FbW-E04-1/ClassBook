require("dotenv").config();

const express = require("express");
const server = express();

server.listen(process.env.PORT, () => console.log(`server listening on port ${process.env.PORT}`));

require("./lib/database.js");

server.use(require('./middlewares/logger'));

// https://expressjs.com/en/resources/middleware/cors.html#configuring-cors
// description of CORS options: https://javascript.plainenglish.io/using-the-cors-middleware-for-cross-domain-communication-6e78d17b7eac
server.use(require('cors')(
        {
            origin: 'http://localhost:3000', // only this host is allowed
            credentials: true, // This sets the Access-Control-Allow-Credentials CORS header. 
            // Set this to true if we want to pass the header. Otherwise, it’s omitted.
            // => this will allow sending of cookies
            optionsSuccessStatus: 200 // workaround for some browsers having a problem on 204 status-code
        }
    ));
    
server.use(require('cookie-parser')());
server.use(express.json());
server.use(express.urlencoded({ extended: true }))

const checkAuth = require("./middlewares/checkAuth.js");

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
