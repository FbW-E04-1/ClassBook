const router = require('express').Router();

const authentication = require('../middleware/authentication');

// use the cookie in the authentication middleware.
router.post("/", authentication, (req, res) => {
  res.status(200).send('protected route has been executed');
});

router.get("/", (req, res) => {
  res.status(200).send('route has been executed');
});

module.exports = router;
