require("dotenv").config();
const bcrypt = require("bcryptjs");
const express = require("express");
const server = express();
const mongoose = require("mongoose");
const User = require("./models/UserSchema");
const { signToken, verifyToken } = require("./lib/token");
const authParams = require("./middleware/authPayload");

server.use(express.json()); //gives access to the body i.e translate from json  to javascript(middleware to have access tothe body)

mongoose.connect(
  process.env.MONGODB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) {
      console.log("connected to database");
    } else {
      console.log(`error connected to the database ${err}`);
    }
  }
);

server.listen(process.env.PORT, () =>
  console.log("connected to the server....")
);

// userName = process.argv[2];
// userPassword = process.argv[3]

server.post("/signup", (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let saltRound = 10;
  let hash = bcrypt.hashSync(password, saltRound);

  try {
    const user = new User({ email, password: hash });
    user.save();
    res.json(`user created successfully`);
  } catch (error) {
    console.log(`could not creat new user ${error}`);
    res.status(400).json(`could not creat new user ${error}`);
  }
});

server.post("/login", async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  try {
    const user = await User.findOne({ email }); // checking if the email exist
    if (user === null) {
      res.status(401).json("Could not find user");
    } else {
      const passwordCompare = bcrypt.compareSync(password, user.password); // using compareSync we hash the password and compare with the user.password that was already hashed during signup
      if (passwordCompare === true) {
        const cam =  signToken({email:user.email,userId:user._id})
        res.status(200).json({message: "login successful",token:cam});
      } else {
        res.status(401).json("login failed");
      }
    }
  } catch (error) {
    console.log(`could not lodin${error}`);
    res.status(400).json(`could not login${error}`);
  }
});
