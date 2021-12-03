// with dotenv we load the file .env and make its variables available in process.env
// you want to add the .env to .gitignore so it will not be tracked by git
// however, please provide a file called .env.sample that only contains the keys you use in .env
// that way other developers know how to set up their environment in order to run this code
require("dotenv").config();

// we use the CommonJS module system to import files and modules
// in a nutshell it is just the "good old way" to import modules in node.js applications
// for that, we do NOT need to add "type": "module" to package.json
const express = require("express"); // import express from "express"

// we create a new express instance
const server = express();

// we listen to a port that is defined in .env
// the callback function gets executed once the server listens on that port
server.listen(process.env.PORT, () => console.log(`server running on port ${process.env.PORT}`));

// this is just some mock data we want to use
const products = [
    {
        id: 1,
        name: "product one",
    },
    {
        id: 2,
        name: "product two",
    },
];

// in our concept we defined several endpoints with methods and paths and their status codes when the request was successful
// we use this to create the actual endpoints in our express server
// for each HTTP method express provides a function, that at least takes two parameters for our needs:
// the first one is the path, the second one is the callback function that gets executed once the server receives a request

// GET     /products               200
server.get("/products", (req, res) => {
    // req contains all details about the request
    // res represents the response we are going to send back to the client
    // the function status() helps us setting the correct status code in the response
    // it defaults to 200, so if we do not call it, we always get 200 (OK)

    // the function json() sets the payload and sends the response
    // it also forces express to set the content type to "application/json"
    // we can use send() instead, but then express will try to figure out what type the payload is
    // generally it is safer to set the content type ourselves, so we prevent getting unexpected results
    res.status(200).json(products);
});

// POST    /products               201
server.post("/products", (req, res) => {
    res.status(201).json({ productId: 3 });
});

// we can use a part of the path as a variable. those are called "params"
// in order to do so, we add a : in front of the variable name
// in this case we take the second part of the path and name it "productId"
// it will be available in req.params

// GET     /products/:productId    200
server.get("/products/:productId", (req, res) => {
    console.log(req.params);

    const product = products.find(product => product.id === +req.params.productId);

    res.status(200).json(product);
});

// PUT     /products/:productId    204
// ...

// DELETE  /products/:productId    204
// ...
