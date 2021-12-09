require("dotenv").config();

const express = require("express");
const server = express();

server.listen(process.env.PORT, () => console.log(`server running on port ${process.env.PORT}`));

// populate req.body - req.header 'Content-Type' must be 'application/json'
server.use(express.json());

server.get('/', (req, res) => {
	res.send('hello world');
});

server.get('/resource', (req, res) => {
	res.status(200).send(`${req.method} ${req.url}`);
});

server.get('/resource/:id', (req, res) => {
	res.status(200).send(`${req.method} ${req.url}`);
});

server.post('/resource', (req, res) => {
	// 201 => Created
	res.status(201).send(`${req.method} ${req.url}`);
});

server.put('/resource/:id', (req, res) => {
	res.status(200).send(`${req.method} ${req.url}`);
});

server.delete('/resource/:id', (req, res) => {
	// 204 => No Content
	res.status(204).send(`${req.method} ${req.url}`);
});

// '404' if nothing else got triggered
server.use((req, res) => res.status(404).end());
