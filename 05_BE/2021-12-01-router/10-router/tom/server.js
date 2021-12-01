require("dotenv").config();

const express = require("express"); // import express from "express"
const server = express();

server.listen(process.env.PORT, () => console.log(`server running on port ${process.env.PORT}`));

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

server.get("/products", (req, res) => {
    res.status(200).json(products);
});

server.post("/products", (req, res) => {
    res.status(201).json({ productId: 3 });
});

server.get("/products/:productId", (req, res) => {
    console.log(req.params);

    const product = products.find(product => product.id === +req.params.productId);

    res.status(200).json(product);
});

server.get('/html', (req, res)=> {
    console.log("request received");
    
    // set the Content-Type HTTP-header of the response to 'text/html'
    res.set('Content-Type', 'text/html'); 

    // send the body of the message
    res.send("<html><body>send called</body></html>");
});

// PUT     /products/:productId    204
// ...

// DELETE  /products/:productId    204
// ...

server.route('/libres')
  .get(function (req, res) {
    res.send('Get a random book')
  })
  .post(function (req, res) {
    res.send('Add a book')
  })
  .put(function (req, res) {
    res.send('Update the book')
  })

// same outcome as the version before
// but more redundancy => more likely to introduce bugs/errors
//                     => and more work if change needed
const PATH_BOOKS = '/libres'

server.get(PATH_BOOKS, function (req, res) {
    res.send('Get a random book')
});

server.post(PATH_BOOKS, function (req, res) {
    res.send('Add a book')
});

server.put(PATH_BOOKS, function (req, res) {
    res.send('Update the book')
});

