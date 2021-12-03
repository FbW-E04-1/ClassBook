var express = require('express')
var router = express.Router()

// define the home page route
router.get('/', function (req, res) {
	console.log("request received: GET /users");
	res.send('ROUTER: response: users');
})

router.get('/:userId', (req, res) => {
	console.log("request received: GET /users");
	res.send('response: user with userId: ' + req.params.userId);
});

module.exports = router
