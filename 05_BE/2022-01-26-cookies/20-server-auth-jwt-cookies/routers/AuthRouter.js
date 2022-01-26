const router = require('express').Router();
const bcrypt = require('bcrypt');

const {signToken} = require("../lib/token");
const User = require("../models/UserModel");

router.post("/", async function (req, res) {
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

router.delete('/', (req, res) => {
	res.clearCookie('jwt');
	res.status(200).send('cookie jwt deleted');
});

module.exports = router;
