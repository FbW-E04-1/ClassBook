require('dotenv').config();
const express = require("express")
const server = express();

server.post("/login",async function (req, res) {
    let email =req.body.email;
    let password = req.body.password;



try {
const user =await User.findOne({email});
if (user == null) return res.status(401).json(`Login was incorrect`);


const passwordCompare = await berypt.compare(password, user.password)
if (passwordCompare == false) return res.status(401).json(`Could not login`);

return res.status(200).json(`successfully login`);
} catch (error) {

console. log(`Login failed`, error);
res.status(400).json(`Could not login successfully`);
}
});

