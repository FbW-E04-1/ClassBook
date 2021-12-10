const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.status(200).send(`${req.method} ${req.url}`);
});

router.get('//:id', (req, res) => {
	res.status(200).send(`${req.method} ${req.url}`);
});

router.post('/', (req, res) => {
	// 201 => Created
	res.status(201).send(`${req.method} ${req.url}`);
});

router.put('//:id', (req, res) => {
	res.status(200).send(`${req.method} ${req.url}`);
});

router.delete('//:id', (req, res) => {
	// 204 => No Content
	res.status(204).send(`${req.method} ${req.url}`);
});

module.exports = router;
