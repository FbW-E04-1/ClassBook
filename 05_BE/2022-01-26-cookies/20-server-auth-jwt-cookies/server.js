require("dotenv").config();
const bcrypt = require("bcrypt");
const express = require("express");
const server = express();
const CryptoJS = require("crypto-js");
const mongoose = require("mongoose");
const User = require("./models/UsersSchema");
const {signToken} = require("./lib/token")

server.use(require('cookie-parser')());
server.use(express.json()); //translate from json to javaScript

mongoose.connect(
  process.env.MONGO_URI,
  
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) {
      console.log("connected to database");
    } else {
      console.log(`error connected to the database ${err} `);
    }
  }
);
  
server.listen(process.env.PORT, () => {
  console.log("connected with port " + process.env.PORT);
});  

server.use(require('./middleware/logger'));

server.post("/signup", function (req, res) {
  console.log("request received: ", req.method, req.path, req.body);
  let email = req.body.email;
  let password = req.body.password;
  let saltRounds = 10;
  let hash = bcrypt.hashSync(password, saltRounds);
  
  try {
    const user = new User({ email, password: hash });
    user.save();
    res.json(`user created successfully`);
  } catch (error) {
    console.log(`Could not creat a new user ${error}`);
    res.status(400).json(`Could not creat a new user ${error}`);
  }
});

server.post("/login", async function (req, res) {
  let email = req.body.email;
  let password = req.body.password;

   try {
    const user = await User.findOne({ email });
    if (user == null) {
      return res.status(401).json(`Login was incorrect`);
    }

    const passwordCompare = bcrypt.compareSync(password, user.password);
    if (passwordCompare == false) { //!passwordCompare
      return res.status(401).json(`Could not login`);
    }

    let payload = { email: user.email, userId: user._id };
    const token = signToken(payload)
    console.log(token);
    
    res.cookie("jwt", token);
    return res.status(200).json({message: `successful login`});

  } catch (error) {
    console.log(`Login failed`, error);
    res.status(400).json(`Could not login successfully`);
  }
});

// Does the server receive the cookie?
server.get('/cookies', (req, res) => {
  console.log("cookies:", req.cookies);
  res.json(req.cookies);
});

const authentication = require('./middleware/authentication');

// use the cookie in the authentication middleware.
server.post("/protected", authentication, (req, res) => {
  res.status(200).send('protected route has been executed');
});

server.get("/protected", authentication, (req, res) => {
  res.status(200).send('protected route has been executed');
});


server.use(require('./middleware/errorHandler'));
server.use('/', require('./middleware/notFoundHandler'));
