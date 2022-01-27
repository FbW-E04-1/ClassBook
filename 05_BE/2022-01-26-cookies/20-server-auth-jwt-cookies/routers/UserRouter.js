// const express = require('express');
// const router = express.Router();

const router = require('express').Router();
const bcrypt = require('bcrypt');

const User = require('../models/UserModel');

router.post("/", function (req, res) {
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

module.exports = router;
