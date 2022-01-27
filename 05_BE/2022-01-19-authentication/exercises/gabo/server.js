require("dotenv").config();
const express = require("express");
const server = express();

require('./lib/database.js');

server.listen(process.env.PORT, () => {
  console.log("connected with port " + process.env.PORT);
});  

server.use(require('cookie-parser')());
server.use(express.json()); //translate from json to javaScript

server.use(require('./middleware/logger'));

// const UserRouter = require('./routers/UserRouter');
// server.use('/users', UserRouter);
server.use('/users', require('./routers/UserRouter'));

server.use('/auth', require('./routers/AuthRouter'));

server.use('/resource', require('./routers/ResourceRouter'));

// Does the server receive the cookie?
server.get('/cookies', (req, res) => {
  console.log("cookies:", req.cookies);
  res.json(req.cookies);
});


server.use(require('./middleware/errorHandler'));
server.use('/', require('./middleware/notFoundHandler'));
