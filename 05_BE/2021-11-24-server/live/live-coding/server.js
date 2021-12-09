require("dotenv").config(); // this allows us to run the .env file
const express = require("express");

const server = express();

server.listen(process.env.PORT, () =>
  console.log(`server running ion port ${process.env.PORT}`)
); //we import PORT from the .env file

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

//GET    /products   200
server.get("/products", (req, res) => {
  res.status(200).json(products);
});

// POST  /product   201
server.post("/products", (req, res) => {
  res.status(201).json({ productId: 3 });
});

//GET   /products/:productId    200
server.post("/products/:productId", (req, res) => {
  console.log(req.params); // params is an empty object which is filled with either res or req info

  const product = products.find(product => product.id === +req.params.productId);

  res.status(201).json(product);
});
