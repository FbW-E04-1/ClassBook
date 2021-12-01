var express = require('express')
var router = express.Router()

router.post ('/', (req, res) => {
	console.log("request received POST /");
	res.send('POST /');
});

router.get('/', (req, res) => {
	console.log("request received GET /");
	res.send('GET /');
});

router.get('/:taskId', (req, res) => {
	console.log("request received GET /:taskId " + req.params.taskId);
	res.send('GET /:taskId ' + req.params.taskId);
});

router.put('/:taskId', (req, res) => {
	console.log("request received PUT /:taskId " + req.params.taskId);
	res.send('PUT /:taskId ' + req.params.taskId);
});

router.delete('/:taskId', (req, res) => {
	console.log("request received DELETE /:taskId " + req.params.taskId);
	res.send('DELETE /:taskId ' + req.params.taskId);
});

module.exports = router