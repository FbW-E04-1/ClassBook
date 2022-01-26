require("dotenv").config();
const bcrypt = require("bcrypt");
const express = require("express");
const server = express();
const CryptoJS = require("crypto-js");
const mongoose = require("mongoose");
const User = require("./models/UsersSchema");
const {signToken} = require("./lib/token")
//const authPayload = require("./middleware/authPayload")

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
  //usernameParam = process.argv[2];
  //passwordParam = process.argv[3];
  
  /* const USERS = {
    alice: {
      email: 'alice@gmail.com',
      password:"1234"
      //"$2b$12$zol5VgIoPLy.ogxswBKGM.486NcutM67czNoiJHnPDCLsatQqcfH.",
    },
    bob: {
      email: "bob@example.com",
      password:"2222"
      //"$2b$12$BVNNzeCsqV.PGWhC7M.7GOMQmfFN2CqNeetERGzXAJ6U0/N/r41iq",
    },
  }; */
  
  const payload =
  
  
  server.post("/signup", function (req, res) {
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
    const arepa = signToken({ email: user.email, userId: user._id })
    console.log(arepa);
    return res.status(200).json({message: `successfully login`, token: arepa});
  } catch (error) {
    console.log(`Login failed`, error);
    res.status(400).json(`Could not login successfully`);
  }
});

// function authenticate(username, password) {
//   // var passwordHash = calculateHash(username, password);
//   // console.log(passwordHash);
//   // return;

//   if (!USERS[username]) {
//     console.log("not authenticated");
//     return;
//   }
//   if (bcrypt.hashSync(password, USERS[username].password)) {
//     console.log("authenticated");
//   } else {
//     console.log("not authenticated");
//   }
// }
// authenticate(usernameParam, passwordParam);
