// const express = require('express');
// const router = express.Router();

const router = require('express').Router();
const bcrypt = require('bcrypt');
const authentication = require('../middleware/authentication');

const User = require('../models/UserModel');

router.post("/", function (req, res) {
	console.log("request received: ", req.method, req.path, req.body);
	let email = req.body.email;
	let password = req.body.password;
	let name = req.body.name;
	let age = req.body.age;

	let saltRounds = 10;
	
	let hash = bcrypt.hashSync(password, saltRounds);
	
	try {
	  const user = new User({ name, age, email, password: hash });
	  user.save();
	  res.json(`user created successfully`);
	} catch (error) {
	  console.log(`Could not creat a new user ${error}`);
	  res.status(400).json(`Could not creat a new user ${error}`);
	}
});

router.get('/', authentication, async (req, res) => {
	const user = await User.findById(req.userId);
	console.log(user);
	res.status(200).json(user);
})

module.exports = router;
