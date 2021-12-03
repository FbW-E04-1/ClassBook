const express = require('express');
const router = express.Router();

router.use(middleware2);
function middleware2(req, res, next) {
	console.log('router middleware');
	next();
}

router.get('/', (req, res) => {
	res.send('GET /users');
});

module.exports = router;
